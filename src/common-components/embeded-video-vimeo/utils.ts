import { parseHTML } from "linkedom/worker";

class LRU<K, V> extends Map<K, V> {
    constructor(private readonly maxSize: number) {
        super();
    }

    override get(key: K): V | undefined {
        const value = super.get(key);
        if (value) this.#touch(key, value);
        return value;
    }

    override set(key: K, value: V): this {
        this.#touch(key, value);
        if (this.size > this.maxSize) this.delete(this.keys().next().value);
        return this;
    }

    #touch(key: K, value: V): void {
        this.delete(key);
        super.set(key, value);
    }
}

const formatError = (...lines: string[]) => lines.join("\n         ");

/**
 * Fetch a URL and parse it as JSON, but catch errors to stop builds erroring.
 * @param url URL to fetch
 * @returns {Promise<Record<string, any> | undefined>}
 */
export const safeGet = makeSafeGetter<Record<string, any>>((res) => res.json());

/**
 * Fetch a URL and parse it as HTML, but catch errors to stop builds erroring.
 * @param url URL to fetch
 * @returns {Promise<Document | undefined>}
 */
export const safeGetDOM = makeSafeGetter(async (res) => parseHTML(await res.text()).document);

/** Factory to create safe, caching fetch functions. */
function makeSafeGetter<T>(
    handleResponse: (res: Response) => T | Promise<T>,
    { cacheSize = 1000 }: { cacheSize?: number } = {},
) {
    const cache = new LRU<string, T>(cacheSize);
    return async function safeGet(url: string): Promise<T | undefined> {
        try {
            const cached = cache.get(url);
            if (cached) return cached;
            const response = await fetch(url);
            if (!response.ok)
                throw new Error(
                    formatError(`Failed to fetch ${url}`, `Error ${response.status}: ${response.statusText}`),
                );
            const result = await handleResponse(response);
            cache.set(url, result);
            return result;
        } catch (e: any) {
            console.error(formatError(`[error] safeGet`, e?.message ?? e));
            return undefined;
        }
    };
}
// Thanks to eleventy-plugin-vimeo-embed
// https://github.com/gfscott/eleventy-plugin-vimeo-embed/blob/main/lib/extractMatches.js
const urlPattern =
    /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;

/**
 * Extract a Vimeo ID from a URL if it matches the pattern.
 * @param url URL to test
 * @returns A Vimeo video ID or undefined if none matched
 */
export default function urlMatcher(url: string): string | undefined {
    if (!url) return undefined;

    const match = url.match(urlPattern);
    return match?.[3];
}
