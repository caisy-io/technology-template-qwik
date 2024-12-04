export const langifyUrl = (params: Record<string, string | undefined>, url: string) => {
    const { slug } = params;

    const lang = slug && ["en", "de"].includes(slug.split("/")[0]) ? slug.split("/")[0] : "en";

    if (lang === "en") {
        return url;
    }
    return `${lang}/${url}`;
};
