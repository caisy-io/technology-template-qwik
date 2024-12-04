import FancyImage from "@/common-components/fancy-image/FancyImage";
import Cross from "@/common-components/small-cross/Cross";
import { BREAKPOINTS } from "@/constants/mediaquery";
import ArrowTopRight from "@/icons/ArrowTopRight";
import type { IGenMultiOptionDisplay } from "@/services/graphql/__generated/sdk";
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";

import Button from "~/common-components/button/Button";
import { cn } from "~/utils/tailwind-helper";
import { useNavigation } from "../../../hooks/useNavigation";
import { getInspectProps } from "../../../utils/getInspectProps";
import styles from "./display-option.css?inline";

interface Props extends Pick<IGenMultiOptionDisplay, "optionsDisplay"> {
    componentIndex: number;
    theme: "light" | "dark";
    "data-caisy-document-id"?: any;
    "data-caisy-field-name"?: any;
}

export default component$<Props>( ({ optionsDisplay, componentIndex, theme, ...props }) => {
    useStylesScoped$(styles);
    const {getLink} = useNavigation();

    return (
        <div class="flex h-full w-full flex-wrap justify-between" {...props}>
            {optionsDisplay &&
                optionsDisplay.length > 0 &&
                optionsDisplay.map( (option, index) => {
                    return (
                        option && (
                            <>
                                <input
                                    type="radio"
                                    id={`option-${index}-${componentIndex}`}
                                    name={`"display-option"-${componentIndex}`}
                                    checked={index === 0}
                                    class="hidden"
                                    hidden
                                />
                                {option.label && (
                                    <label
                                        for={`option-${index}-${componentIndex}`}
                                        style={{ width: `calc(100% / ${optionsDisplay.length})` }}
                                        class={cn(
                                            "option-label relative border-b border-r border-t border-solid border-slate-200",
                                            index === 0 && "border-l",
                                        )}
                                    >
                                        {index === 0 && (
                                            <>
                                                <div class="absolute top-0 z-20 hidden gold:block">
                                                    <Cross theme={theme} />
                                                </div>
                                                <div class="absolute top-[65px] z-20 hidden gold:block">
                                                    <Cross theme={theme} />
                                                </div>
                                            </>
                                        )}
                                        {index === optionsDisplay.length - 1 && (
                                            <>
                                                <div class="absolute right-0 top-0 z-20 hidden gold:block">
                                                    <Cross theme={theme} />
                                                </div>
                                                <div class="absolute right-0 top-[65px] z-20 hidden gold:block">
                                                    <Cross theme={theme} />
                                                </div>
                                            </>
                                        )}
                                        <div class="option-title relative flex cursor-pointer items-baseline justify-center gap-1.5 px-1 py-2 before:absolute before:inset-0 before:bg-[linear-gradient(109deg,#353532_0%,#282B37_100%)] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] silver:px-3 silver:py-3.5 gold:gap-3 gold:p-5">
                                            <span class="z-10 flex h-[9px] w-[9px] items-center justify-center transition-colors duration-300 silver:h-[14px] silver:w-[14px] gold:h-[20px] gold:w-[20px] [&_path]:fill-gray-900 [&_svg]:h-[9px] [&_svg]:w-[9px] [&_svg]:silver:h-[14px] [&_svg]:silver:w-[14px] [&_svg]:gold:h-[20px] [&_svg]:gold:w-[20px]">
                                                <ArrowTopRight />
                                            </span>
                                            <p class="z-10 font-sans text-[14px] font-normal leading-[20px] tracking-normal text-gray-900 transition-colors duration-300 silver:text-[16px] silver:leading-[24px] gold:font-montserrat gold:text-[20px] gold:font-semibold gold:leading-[normal] gold:-tracking-[-0.2px]">
                                                {option.label}
                                            </p>
                                        </div>
                                    </label>
                                )}
                                <div class="option-content relative order-1 hidden">
                                    <div class="absolute inset-0 -ml-[1px] hidden h-full w-full items-center justify-center gold:flex">
                                        {optionsDisplay.length % 2 === 0 && (
                                            <>
                                                <div class="absolute top-0 z-20">
                                                    <Cross theme={theme} />
                                                </div>
                                                <div class="absolute -top-[65px] z-20">
                                                    <Cross theme={theme} />
                                                </div>
                                            </>
                                        )}
                                        <div class="h-full w-px bg-slate-200" />
                                    </div>
                                    <div class="h-11 w-full gold:h-4" />
                                    <div class="relative z-10 flex flex-col gold:flex-row">
                                        {option.image?.src && (
                                            <div
                                                {...getInspectProps({
                                                    id: option.id,
                                                    fieldName: "image",
                                                    key: option.image,
                                                })}
                                                class="relative h-full w-full gold:w-1/2 gold:pr-5"
                                            >
                                                <FancyImage
                                                    class="option-image"
                                                    img={option.image}
                                                    lazyload={componentIndex > 0 && index > 0}
                                                    responsiveAspectRatio={{
                                                        bronze: 342 / 216,
                                                        silver: 535 / 371,
                                                        gold: 492 / 350,
                                                        platinum: 576 / 350,
                                                    }}
                                                    responsiveFactor={{ bronze: 1, gold: 1 / 2 }}
                                                    responsiveMaxWidth={{
                                                        platinum: BREAKPOINTS.PLATINUM / 2,
                                                    }}
                                                />
                                                {option.buttonBelowImage && (
                                                    <div
                                                        {...getInspectProps({
                                                            id: option.id,
                                                            fieldName: "buttonBelowImage",
                                                            key: option.buttonBelowImage,
                                                        })}
                                                        class={cn(
                                                            "option-button absolute -bottom-7 left-4 z-30 flex justify-center silver:left-10 platinum:left-16",
                                                        )}
                                                    >
                                                        <a href={`${( getLink(option?.buttonBelowImage))?.href}`}>
                                                            <Button
                                                                type="special"
                                                                label={option.buttonBelowImage.label}
                                                            />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        <div class="-order-1 h-full w-full gold:order-1 gold:w-1/2">
                                            <div class="hidden h-14 w-full gold:block" />
                                            <div class="w-full silver:w-[85%] gold:pl-11 platinum:pl-14">
                                                {option.strap && (
                                                    <p
                                                        {...getInspectProps({
                                                            id: option.id,
                                                            fieldName: "strap",
                                                            key: option.strap,
                                                        })}
                                                        class="option-strap mb-1 font-sans text-[12px] font-bold uppercase leading-[normal] -tracking-[0.12px] text-primary-500"
                                                    >
                                                        {option.strap}
                                                    </p>
                                                )}
                                                {option.title && (
                                                    <h3
                                                        {...getInspectProps({
                                                            id: option.id,
                                                            fieldName: "title",
                                                            key: option.title,
                                                        })}
                                                        class="option-title mb-4 font-montserrat text-[42px] font-semibold leading-[normal] -tracking-[0.42px] text-gray-800 silver:mb-8 gold:mb-4 gold:text-[48px] gold:-tracking-[0.48px]"
                                                    >
                                                        {option.title}
                                                    </h3>
                                                )}
                                                {option.text?.json && (
                                                    <div
                                                        {...getInspectProps({
                                                            id: option.id,
                                                            fieldName: "text",
                                                            key: option.text,
                                                        })}
                                                        class="option-text pb-4 font-sans text-[16px] font-normal leading-[150%] tracking-normal text-gray-500 silver:pb-8 gold:pb-0"
                                                    >
                                                        <RichTextRenderer node={option.text.json} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="h-14 w-full silver:h-20 gold:h-4" />
                                </div>
                            </>
                        )
                    );
                })}
        </div>
    );
});
