import Page from "@/layouts/page";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { useCMSData } from "../../services/content/loader/useCMSData";
import { getDocumentHeadValue } from "../../services/head";
import { onGetRobots } from "../../services/robots";
import { onGetSitemap } from "../../services/sitemap";

export { useFormLoader } from "@/components/contact-form/ContactForm";
export { useCMSData };

export const onGet: RequestHandler = async (ev) => {
    if (`${ev.url.pathname}`.replaceAll("/", "") === "sitemap.xml") {
        return onGetSitemap(ev);
    }
    if (`${ev.url.pathname}`.replaceAll("/", "") === "robots.txt") {
        return onGetRobots(ev);
    }
    await ev.next();
};

export default component$(() => {
    const cmsData = useCMSData();
    return <Page {...cmsData.value} />;
});

export const head: DocumentHead = ({ resolveValue }) => {
    const props = resolveValue(useCMSData);

    return getDocumentHeadValue(props);
};
