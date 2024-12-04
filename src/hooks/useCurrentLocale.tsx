import { useLocation } from "@builder.io/qwik-city";
import { currentLocaleFromPath } from "../services/i18n";

export const useCurrentLocale = () => {
    const currentUrl = useLocation().url;
    const path = currentUrl.pathname;

    return currentLocaleFromPath(path);
};