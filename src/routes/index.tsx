import Page from "@/layouts/page";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useCMSData } from "../services/content/loader/useCMSData";
import { getDocumentHeadValue } from "../services/head";

export { useFormLoader } from "@/components/contact-form/ContactForm";
export { useCMSData };

export default component$(() => {
    const cmsData = useCMSData();
    return <Page {...cmsData.value} />;
});

export const head: DocumentHead = ({ resolveValue }) => {
    const props = resolveValue(useCMSData);

    return getDocumentHeadValue(props);
};
