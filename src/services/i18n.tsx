
export const LOCALES = ["en", "de"];
export const DEFAULT_LOCALE = "en";

export const currentLocaleFromPath = (path: string): string => {
    const locale = LOCALES.find((locale) => path == `/${locale}` || path.startsWith(`/${locale}/`)) || DEFAULT_LOCALE;

    return locale;
};

export const changePathLocale = ({ path, currentLocale, newLocale }) => {
    if (currentLocale === DEFAULT_LOCALE) {
        // add the new locale prefix to the URL

        if (path == "/") {
            return `/${newLocale}`;
        }

        if (path == `/${currentLocale}`) {
            return `/${newLocale}`;
        }

        if (path.startsWith(`/${currentLocale}/`)) {
            return `/${newLocale}${path.substring(3)}`;
        }

        return `/${newLocale}${path}`;
    }

    if (newLocale === DEFAULT_LOCALE) {
        // remove the current locale prefix from the URL

        if (path == `/${currentLocale}`) {
            return "/";
        }

        if (path.startsWith(`/${currentLocale}/`)) {
            return path.substring(3);
        }

        return path;
    }

    if (path == `/${currentLocale}`) {
        // if the path is just the locale, replace it with the new locale
        return `/${newLocale}`;
    }
    // replace the current locale with the new locale
    return path.replace(`/${currentLocale}/`, `/${newLocale}/`);
};
