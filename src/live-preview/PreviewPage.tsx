/* eslint-disable qwik/no-use-visible-task */
import type { IGenFooter, IGenNavigation, IGenPage } from "@/services/graphql/__generated/sdk";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useCaisyUpdates } from "@caisy/live-preview-qwik";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import { CMSDataContextProvider } from "../contexts/cms-data";
import { ComponentSelector } from "../layouts/ComponentSelector";

export interface Props {
    Page?: IGenPage | null;
    Navigation?: IGenNavigation | null;
    Footer?: IGenFooter | null;
    previewToken: string;
    projectId: string;
}

const PreviewPage = component$((props: Props) => {
    const propsWithUpdates = useCaisyUpdates({
        Page: { ...props.Page, __typename: "Page" },
        Navigation: { ...props.Navigation, __typename: "Navigation" },
        Footer: { ...props.Footer, __typename: "Footer" },
    });

    useVisibleTask$(({ track }) => {
        track(() => {
            propsWithUpdates;
        });
        if (typeof window !== "undefined") {
            console.log(
                ` updates.value.data["en"] ${propsWithUpdates.value.version}`,
                propsWithUpdates.value.data["en"],
            );
        }
    });

    return (
        <CMSDataContextProvider {...propsWithUpdates}>
            <Navigation {...propsWithUpdates.value.data["en"]?.Navigation}>
                <main>
                    <ComponentSelector
                        key={`${propsWithUpdates.value.version}`}
                        page={propsWithUpdates.value.data["en"]?.Page}
                    />
                </main>
                <Footer {...propsWithUpdates.value.data["en"]?.Footer} />
            </Navigation>
        </CMSDataContextProvider>
    );
});

export default PreviewPage;
