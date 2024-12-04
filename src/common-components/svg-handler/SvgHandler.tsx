import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { Maybe } from "graphql/jsutils/Maybe";

const SvgHandler = component$<{ src: Maybe<string> | undefined; class?: string }>(({ src, class: className }) => {
    if (!src || !src?.endsWith(".svg")) return null;

    const ref = useSignal<HTMLSpanElement>();

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ track }) => {
        track(() => ref);

        fetch(src)
            .then((res) => res.text())
            .then((res) => {
                if (ref.value) {
                    ref.value.innerHTML = res;
                }
            })
            .then(() => {
                const svgs = ref.value?.getElementsByTagName("svg");
                const paths = ref.value?.getElementsByTagName("path");
                if (!paths || !paths.length || !svgs || !svgs.length) return;

                Array.from(paths).forEach((path) => {
                    const pathStroke = path.getAttribute("stroke");
                    const pathFill = path.getAttribute("fill");

                    if (pathStroke && pathStroke !== "none") {
                        path.setAttribute("stroke", "currentColor");
                    } else if (pathFill && pathFill !== "none") {
                        path.setAttribute("fill", "currentColor");
                    }
                });

                Array.from(svgs).forEach((svg) => {
                    const svgStroke = svg.getAttribute("stroke");
                    const svgFill = svg.getAttribute("fill");

                    if (svgStroke && svgStroke !== "none") {
                        svg.setAttribute("stroke", "currentColor");
                    } else if (svgFill && svgFill !== "none") {
                        svg.setAttribute("fill", "currentColor");
                    }
                });
            });
    });

    return <span ref={ref} class={className} />;
});

export default SvgHandler;
