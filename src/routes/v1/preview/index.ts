import type { RequestHandler } from "@builder.io/qwik-city";
import { getSdkWithEnv } from "../../../services/graphql/getSdk";
import { currentLocaleFromPath } from "../../../services/i18n";
import { getFullSlugFromPage } from "../../../utils/getFullSlugFromPage";

export const onGet: RequestHandler = async (e) => {
    const { url, redirect, env } = e;
    const caisySDK = getSdkWithEnv(env);
    const incomingUrl = new URL(url);

    const locale = currentLocaleFromPath(incomingUrl.pathname);
    try {
        const documentId = incomingUrl.searchParams.get("document_id");
        if (documentId) {
            const { Page } = await caisySDK.PageMetaById({ id: documentId, locale });
            const { Navigation } = await caisySDK.Navigation({ locale });
            const path = Page && getFullSlugFromPage(Page);

            if (Navigation?.homePage?.slug === path) {
                incomingUrl.pathname = "/";
            } else {
                incomingUrl.pathname = "/" + path;
            }
        }
    } catch (e) {
        incomingUrl.pathname = "/";
    }
    throw redirect(308, incomingUrl.toString());
};
