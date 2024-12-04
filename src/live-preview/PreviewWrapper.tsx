/* eslint-disable qwik/no-use-visible-task */
import type { IGenFooter, IGenNavigation, IGenPage } from "@/services/graphql/__generated/sdk";
import { component$, useSignal, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import { CaisyConnectionIndicator, livePreviewQwik } from "@caisy/live-preview-qwik";
import PreviewPage from "./PreviewPage";

export interface Props {
    Page?: IGenPage | null;
    Navigation?: IGenNavigation | null;
    Footer?: IGenFooter | null;
    previewToken: string;
    projectId: string;
}

const PreviewWrapper = component$((props: Props) => {
    useStyles$(
        `[data-caisy-field-name][data-caisy-document-id]{outline:rgba(0,140,255,0) dashed 1px!important;transition:outline-color .3s ease-in-out}[data-caisy-inspect-mode=true] [data-caisy-field-name][data-caisy-document-id]{outline:rgba(0,140,255,1) dashed 1px!important}[data-caisy-inspect-mode=true] [data-caisy-field-name][data-caisy-document-id]:hover{outline:rgba(0,140,255,1) solid 2px!important}button.caisy-live-preview-edit{display:none;outline:0;padding:0;margin:0;border:none;z-index:999999!important;position:fixed;height:32px;width:74px;transition:background .3s;text-align:center!important;justify-content:center;align-items:center;box-sizing:border-box;cursor:pointer;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-weight:500!important;font-size:14px!important;gap:9px;background:#008cff;border-radius:8px!important;color:#fff!important}button.caisy-live-preview-edit:active:hover,button.caisy-live-preview-edit:hover{background:#0077d9}[data-caisy-inspect-mode=true] button.caisy-live-preview-edit{display:flex}`,
    );
    const previewToken = useSignal<string | null>(null);
    const xlocale = "en";

    useVisibleTask$(async () => {
        const w = typeof window === "undefined" ? null : window;
        if (!w) return;

        const queryString = w.location.search;
        const urlParams = new URLSearchParams(queryString);
        const caisy_preview_access_token = urlParams.get("caisy_preview_access_token");
        previewToken.value = caisy_preview_access_token as string;

        // if (caisy_preview_access_token) {
        //     previewToken.value = caisy_preview_access_token as string;
        //     localStorage.setItem("caisy_preview_access_token", caisy_preview_access_token as string);
        // } else {
        //     const localToken = localStorage.getItem("caisy_preview_access_token");
        //     if (!localToken) {
        //         return;
        //     }
        //     previewToken.value = localToken;
        // }

        if (!previewToken.value) return;
        let close: any = null;

        const start = async () => {
            const token = previewToken.value;
            console.log(`start called  token`, token);

            if (!token) return;

            close = livePreviewQwik.caisyLivePreview({
                projectId: props.projectId,
                token,
                locale: xlocale,
                enabled: true,
                debug: true,
            });
            console.log(` live preview started`);
        };

        start();

        return () => {
            close && close();
        };
    });

    return (
        <>
            <CaisyConnectionIndicator i18n={{}} />
            <PreviewPage {...props} />
        </>
    );
});

export default PreviewWrapper;
