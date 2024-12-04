import FooterBackground from "@/icons/FooterBackground";
import FooterLogo from "@/icons/FooterLogo";
import type { IGenFooter } from "@/services/graphql/__generated/sdk";
import { groupItems } from "@/utils/groupItems";
import { cn } from "@/utils/tailwind-helper";
import { component$, Fragment, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer"; // Note: You might need to find a Qwik-compatible alternative
import FancyImage from "../../common-components/fancy-image/FancyImage";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { useNavigation } from "../../hooks/useNavigation";
import { changePathLocale, LOCALES } from "../../services/i18n";
import { getInspectProps } from "../../utils/getInspectProps";

export interface FooterProps extends IGenFooter {}

export const Footer = component$((props: FooterProps) => {
    const { content, id, socialLinks, items, copyright } = props;
    const sections = groupItems(items);
    const currentYear = new Date().getFullYear();
    const currentUrl = useLocation().url;

    useStyles$(
        `.footer-rich-text {
          p {
            @apply text-base text-primary-800;
          }
          a {
            @apply font-montserrat text-base font-semibold text-slate-800 underline;
          }
        };`,
    );
    const { getLink, currentLocale } = useNavigation();

    return (
        <footer class="w-full border-t border-solid border-slate-200 bg-white">
            <div class="h-10 w-full"></div>
            <div class={cn(gridPadding, `relative z-30`)}>
                <div class={cn(gridMaxWidth, gridLayout, `h-full items-start`)}>
                    <div {...getInspectProps({ id, fieldName: "content" })} class="col-span-4">
                        <FooterLogo />
                        {content?.json && (
                            <div class="footer-rich-text prose pt-7">
                                <RichTextRenderer
                                    node={content?.json}
                                    overwrites={{
                                        p: "p class='text-red-400 text-base font-normal leading-normal block'",
                                    }}
                                />
                            </div>
                        )}

                        {socialLinks && socialLinks.length > 0 && (
                            <div class="flex gap-4 pt-8">
                                {socialLinks.map((socialLink, index) => {
                                    if (!socialLink?.icon || !socialLink?.linkAddress) return null;
                                    return (
                                        <a key={index} href={socialLink?.linkAddress} class="inline-block">
                                            <div class="h-6 w-6">
                                                <FancyImage img={socialLink?.icon} />
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        )}

                        <div class="h-14 silver:hidden"></div>
                    </div>
                    <div class="col-span-4 gold:col-span-8">
                        <div
                            {...getInspectProps({ id, fieldName: "sections" })}
                            class="flex flex-wrap justify-between gap-x-8 gap-y-5 silver:gap-y-10"
                        >
                            {sections &&
                                sections.map((section, index) => (
                                    <div
                                        key={index}
                                        class="basis-full silver:basis-[calc(50%_-_2rem)] gold:basis-[calc(25%_-_2rem)]"
                                    >
                                        <span class="block pb-8 font-montserrat text-sm font-semibold uppercase leading-normal text-zinc-600">
                                            {section.name}
                                        </span>
                                        <ul class="flex flex-col gap-2.5">
                                            {section.items.map((item, index) => {
                                                const link = getLink(item);
                                                if (!link?.href || !link?.name) return null;
                                                return (
                                                    <li
                                                        key={item.id || index}
                                                        class="block text-base font-normal leading-normal text-zinc-600"
                                                    >
                                                        <a title={link.title} href={link.href}>
                                                            {link?.name}
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div
                    {...getInspectProps({ id, fieldName: "copyright" })}
                    class={cn(
                        gridMaxWidth,
                        `flex w-full flex-row justify-start pb-8 pt-16 text-center font-montserrat text-sm font-normal uppercase leading-normal text-zinc-800 gold:justify-start gold:pt-8`,
                    )}
                >
                    <div class="flex flex-col gap-8">
                        <div>
                            © {currentYear} {copyright}
                        </div>
                        <div class="flex flex-row gap-2">
                            {LOCALES.map((locale, index) => (
                                <Fragment key={index}>
                                    <a
                                        href={changePathLocale({
                                            path: currentUrl.pathname,
                                            currentLocale,
                                            newLocale: locale,
                                        })}
                                        class={cn(
                                            "text-primary-100 font-sans text-base font-normal",
                                            currentLocale === locale && "underline",
                                        )}
                                    >
                                        {locale.toUpperCase()}
                                    </a>
                                    {index !== LOCALES.length - 1 && (
                                        <span class="text-primary-100 font-sans text-base font-normal">|</span>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                <div class={cn(gridMaxWidth, `relative w-full`)}>
                    <div
                        class={cn(
                            `pointer-events-none absolute bottom-0 flex w-full justify-start overflow-hidden silver:justify-center`,
                        )}
                    >
                        <FooterBackground />
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
