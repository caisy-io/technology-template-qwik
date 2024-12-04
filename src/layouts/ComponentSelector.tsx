/* eslint-disable qwik/no-use-visible-task */
import { ContactForm } from "@/components/contact-form/ContactForm";
import Facts from "@/components/facts/Facts";
import FramedMediaWithText from "@/components/framed-media-with-text/FramedMediaWithText";
import FreeMediaWithText from "@/components/free-media-with-text/FreeMediaWithText";
import { FulltextStandalone } from "@/components/fulltext-standalone/FulltextStandalone";
import { FulltextWithHeader } from "@/components/fulltext-with-header/FulltextWithHeader";
import HeadlineWithImage from "@/components/headline-with-image/HeadlineWithImage";
import { Hero } from "@/components/hero/Hero";
import { MultiOptionDisplay } from "@/components/multi-option-display/MultiOptionDisplay";
import TeaserGrid from "@/components/teaser-grid/TeaserGrid";
import TwoHighlights from "@/components/two-highlights/TwoHighlights";
import type { IGenPage } from "@/services/graphql/__generated/sdk";
import { component$, Fragment, useVisibleTask$ } from "@builder.io/qwik";
import BlogLinking from "~/components/blog-linking/BlogLinking";
import { NewspaperGrid } from "~/components/newspaper-grid/NewspaperGrid";

interface IComponentSelectorProps {
    page?: Pick<IGenPage, "components"> | null;
}

export const ComponentSelector = component$<IComponentSelectorProps>(({ page }) => {
    const { components } = page ?? {};

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ cleanup }) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
                // else {
                //     entry.target.classList.remove("in-view");
                // }
            });
        });

        document.querySelectorAll("[data-animate]").forEach((el) => {
            el.classList.add("[&:not(.in-view)]:opacity-0");
            observer.observe(el);
        });

        cleanup(() => observer.disconnect());
    });

    return (
        <>
            {components?.map(
                (component, componentIndex) =>
                    component && (
                        <Fragment key={component.id || componentIndex}>
                            {component.__typename == "TwoHighlights" && (
                                <TwoHighlights {...component} componentIndex={componentIndex} />
                            )}
                            {component.__typename == "HeadlineWithImage" && (
                                <HeadlineWithImage {...component} componentIndex={componentIndex} />
                            )}
                            {component.__typename == "FramedMediaWithText" && (
                                <FramedMediaWithText {...component} componentIndex={componentIndex} />
                            )}
                            {component.__typename == "FreeMediaWithText" && (
                                <FreeMediaWithText {...component} componentIndex={componentIndex} />
                            )}
                            {component.__typename == "TeaserGrid" && (
                                <TeaserGrid {...component} componentIndex={componentIndex} />
                            )}
                            {component.__typename == "Facts" && (
                                <Facts {...component} componentIndex={componentIndex} />
                            )}

                            {component.__typename == "Hero" && <Hero {...component} componentIndex={componentIndex} />}
                            {component.__typename == "NewspaperGrid" && (
                                <NewspaperGrid {...component} componentIndex={componentIndex} />
                            )}

                            {component.__typename == "ContactForm" && (
                                <ContactForm {...component} componentIndex={componentIndex} />
                            )}
                            {component.__typename === "MultiOptionDisplay" && (
                                <MultiOptionDisplay {...component} componentIndex={componentIndex} />
                            )}
                            {component.__typename == "FulltextStandalone" && (
                                <FulltextStandalone {...component} componentIndex={componentIndex} />
                            )}
                            {component.__typename == "FulltextWithHeader" && (
                                <FulltextWithHeader {...component} componentIndex={componentIndex} />
                            )}
                            {component.__typename == "BlogLinking" && (
                                <BlogLinking {...component} componentIndex={componentIndex} />
                            )}
                        </Fragment>
                    ),
            )}
        </>
    );
});
