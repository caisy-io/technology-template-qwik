import Button from "@/common-components/button/Button";
import { $, component$, Slot, useOnDocument, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { gridMaxWidth, gridPadding } from "../../constants/grid";
import { firstLineLeft, firstLineRight } from "../../constants/lines";
import { useNavigation } from "../../hooks/useNavigation";
import IconArrowTopRight from "../../icons/IconArrowTopRight";
import { IconChevronDown } from "../../icons/IconChevronDown";
import Logo from "../../icons/Logo";
import type { IGenNavigation } from "../../services/graphql/__generated/sdk";
import { DEFAULT_LOCALE } from "../../services/i18n";
import { getInspectProps } from "../../utils/getInspectProps";
import { cn } from "../../utils/tailwind-helper";
import MenuIcon from "./MenuIcon";

export interface NavigationProps extends IGenNavigation {}

export const Navigation = component$<NavigationProps>(({ items, id }) => {
    const isOpen = useSignal(false);
    const dropdownStates = useSignal<Record<number, boolean>>({});
    const { getLink, currentLocale } = useNavigation();

    const toggleMobileNav = $(() => {
        isOpen.value = !isOpen.value;
        document.body.classList.toggle("overflow-hidden");
    });

    const toggleDropdownMenu = $((index: number) => {
        dropdownStates.value = {
            ...dropdownStates.value,
            [index]: !dropdownStates.value[index],
        };
    });

    useOnDocument(
        "click",
        $((event) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".xnav-dropdown")) {
                dropdownStates.value = {};
            }
        }),
    );

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                isOpen.value = false;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const homeLink = currentLocale == DEFAULT_LOCALE ? "/" : `/${currentLocale}`;
    const homeLinkTitle = currentLocale == "en" ? "Back to home" : "Zurück zur Startseite";
    return (
        <div id="mainnav" class={isOpen.value ? "open" : ""}>
            <header class="sticky top-0 z-50">
                <div class="relative z-50 mx-auto">
                    <div class={cn(firstLineLeft, "h-full")}></div>
                    <div class={cn(firstLineRight, "h-full")}></div>
                    <div class="pointer-events-none absolute top-0 z-10 h-full w-full overflow-hidden">
                        <div class="elipse-tr elipse-tr-gradient absolute bottom-[-373.74px] right-[-350px] h-[614px] w-[614px] rounded-[614px] opacity-30 blur-[157px] silver:bottom-[-473.74px] silver:right-[-210px] gold:bottom-[-403.74px] gold:right-[-253px] platinum:bottom-[-473.739px] platinum:right-[-307px]"></div>
                        <div class="elipse-bl absolute bottom-[-849px] left-[-590px] h-[908px] w-[908px] rounded-[908px] bg-elipse-bl-gradient opacity-30 blur-[157px] silver:bottom-[-849px] silver:left-[-350px]"></div>
                    </div>
                    <div
                        class={cn(
                            gridPadding,
                            `z-50 flex items-center justify-between border-b border-solid border-b-slate-600 bg-primary-gradient px-4 py-6 backdrop-blur-[10px]`,
                        )}
                    >
                        <div class={cn(gridMaxWidth, "flex w-full items-start justify-between")}>
                            <a href={homeLink} title={homeLinkTitle} class="gold:invisible">
                                <Logo />
                            </a>
                            <div
                                {...getInspectProps({ id, fieldName: "items" })}
                                class="relative z-20 inline-flex items-center gap-6"
                            >
                                {items?.map((item, index) => {
                                    if (item?.__typename === "Page" && index + 1 === items.length) {
                                        const link = getLink(item);
                                        return (
                                            <a
                                                key={index}
                                                href={link.href}
                                                title={link.title}
                                                target={link.target}
                                                class="relative hidden flex-auto items-center justify-center silver:inline-flex gold:hidden"
                                            >
                                                <Button type="primary" label={item?.name} />
                                            </a>
                                        );
                                    }
                                    return null;
                                })}
                                <div></div>
                                <div class="flex h-[2rem] items-center gold:hidden">
                                    <MenuIcon class="h-[2rem] text-white" onClick$={toggleMobileNav} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Slot />
            <nav
                class={`xnav-items xnav-toggle ${isOpen.value ? "" : "hidden"} gold:px-auto fixed right-0 top-[83px] z-30 w-full gold:fixed gold:top-6 gold:z-50 gold:block gold:items-center gold:px-10 platinum:px-16`}
            >
                <div class={gridMaxWidth}>
                    <div class="flex h-full w-full items-center justify-between bg-primary-opacity-80 px-6 py-4 gold:bg-transparent gold:p-0">
                        <a href={homeLink} title={homeLinkTitle} class="hidden gold:block">
                            <Logo />
                        </a>
                        <ul
                            {...getInspectProps({ id, fieldName: "items" })}
                            class="relative z-20 flex w-full list-none flex-col gold:flex-row gold:items-center gold:justify-end gold:gap-5"
                        >
                            {items?.map(async (item, index) => {
                                if (item?.__typename === "Page" && index + 1 === items.length) {
                                    const link = getLink(item);

                                    return (
                                        <li key={index} class="silver:hidden gold:block">
                                            <a
                                                href={link.href}
                                                target={link.target}
                                                title={link.title}
                                                class="relative mt-3 block flex-auto items-center justify-center gap-1 pt-3 silver:inline-flex gold:m-0 gold:p-0"
                                            >
                                                <div class="hidden gold:block">
                                                    <Button type="primary" label={item?.name} />
                                                </div>
                                                <div class="flex w-min items-center justify-center gap-2 bg-white px-4 py-2 silver:hidden">
                                                    {link.name}
                                                </div>
                                            </a>
                                        </li>
                                    );
                                } else if (item?.__typename === "Page") {
                                    const { href, active, title } = getLink(item);
                                    return (
                                        <li key={index}>
                                            <a
                                                title={title}
                                                href={href}
                                                class={cn(
                                                    "relative block flex-auto items-center justify-center gap-1 gold:inline-flex",
                                                    index !== 0 &&
                                                        "border-t border-solid border-[rgba(39,_64,_93,_0.10)]",
                                                    "gold:m-0 gold:inline-flex gold:justify-center gold:self-stretch gold:border-none gold:p-0 gold:px-2.5 gold:py-0.5 hover:gold:bg-white-opacity-15",
                                                    active && "gold:bg-white-opacity-15",
                                                )}
                                            >
                                                <div
                                                    class={cn(
                                                        "pb-4 text-sm font-medium leading-5 text-white gold:font-normal",
                                                        index !== 0 ? "pt-4" : "",
                                                        "gold:p-0",
                                                    )}
                                                >
                                                    {item?.name}
                                                </div>
                                            </a>
                                        </li>
                                    );
                                } else if (item?.__typename === "NavigationCategory") {
                                    return (
                                        <li key={index}>
                                            <div
                                                class={`xnav-dropdown group ${
                                                    index !== 0
                                                        ? "border-t border-solid border-[rgba(39,_64,_93,_0.10)]"
                                                        : ""
                                                } gold:m-0 gold:border-none gold:p-0`}
                                                aria-expanded={dropdownStates.value[index] ? "true" : "false"}
                                            >
                                                <button
                                                    class="flex w-full items-center"
                                                    onClick$={() => toggleDropdownMenu(index)}
                                                >
                                                    <div class="relative inline-flex w-full flex-auto items-center justify-between gap-1 gold:inline-flex gold:justify-center gold:self-stretch gold:px-2.5 gold:py-0.5">
                                                        <div
                                                            class={`pb-4 text-sm font-medium leading-5 text-white gold:font-normal ${
                                                                index !== 0 ? "pt-4" : ""
                                                            } gold:p-0`}
                                                        >
                                                            {item?.name}
                                                        </div>
                                                        <IconChevronDown class="relative h-4 w-4 text-white" />
                                                    </div>
                                                </button>
                                                <div
                                                    class={`xnav-dropdown dropdown-toggle ${
                                                        dropdownStates.value[index] ? "" : "hidden"
                                                    } relative group-hover:gold:block`}
                                                    aria-expanded={dropdownStates.value[index] ? "true" : "false"}
                                                >
                                                    <div class="relative top-0 gold:absolute gold:items-center gold:justify-center gold:pr-6 gold:pt-0">
                                                        <div class="w-full gold:h-2.5" />
                                                        <ul class="list-none gold:z-30 gold:min-w-[206px] gold:bg-primary-opacity-80 gold:px-6 gold:py-0 gold:backdrop-blur-[12px]">
                                                            {item?.items?.map((subItem, subIndex) => {
                                                                const { href } = getLink(subItem);
                                                                return (
                                                                    <li
                                                                        key={subIndex}
                                                                        class={`px-3 pb-4 text-sm font-medium leading-5 text-white gold:font-normal ${
                                                                            subIndex !== 0 ? "pt-3.5" : ""
                                                                        } group/sub gold:relative gold:z-40 gold:px-0 gold:py-4 ${
                                                                            subIndex !== 0
                                                                                ? "border-t border-solid border-[rgba(39,_64,_93,_0.10)]"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        <a href={href}>
                                                                            <span class="gold:flex gold:items-center gold:justify-between">
                                                                                {subItem?.name}
                                                                                <div class="hidden h-2.5 w-2.5 -translate-x-0.5 translate-y-0.5 transform transition-all duration-500 ease-in-out group-hover/sub:translate-x-0 group-hover/sub:translate-y-0 group-hover/sub:opacity-100 gold:block gold:opacity-0">
                                                                                    <IconArrowTopRight />
                                                                                </div>
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
});

export default Navigation;
