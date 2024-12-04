import { component$ } from "@builder.io/qwik";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import { CMSDataContextProvider } from "../contexts/cms-data";
import PreviewWrapper from "../live-preview/PreviewWrapper";
import { ComponentSelector } from "./ComponentSelector";

export default component$(({ ...props }: any) => {
    if (props.previewToken) {
        return (
            <>
                <PreviewWrapper {...props} />
            </>
        );
    }

    return (
        <CMSDataContextProvider {...props}>
            <Navigation {...props.Navigation}>
                <main>
                    <ComponentSelector page={props.Page} />
                </main>
                <Footer {...props.Footer} />
            </Navigation>
        </CMSDataContextProvider>
    );
});
