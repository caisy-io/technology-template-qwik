import type { EnvGetter } from "@builder.io/qwik-city/middleware/request-handler";
import { getSdkWithEnv } from "../graphql/getSdk";

export type PageMeta = {
    __typename?: "Page";
    id?: string | null;
    slug?: string | null;
    noIndex?: boolean | null;
    _meta?: {
        __typename?: "CaisyDocument_Meta";
        publishedAt?: any | null;
    } | null;
};

export interface GetAllPages {
    locale: string;
    after?: string;
    arr?: PageMeta[];
    env?: EnvGetter;
}

export const getAllPages = async ({ after, arr = [], env, locale }: GetAllPages): Promise<PageMeta[]> => {
    const caisySDK = getSdkWithEnv(env!);

    const { allPage } = await caisySDK.allPageMeta({ after, locale });

    allPage?.edges?.forEach((edge) => {
        edge?.node && arr.push(edge.node as PageMeta);
    });

    if (allPage?.pageInfo?.hasNextPage) {
        return await getAllPages({
            after: allPage.pageInfo.endCursor ?? undefined,
            arr,
            env,
            locale,
        });
    }

    return arr as PageMeta[];
};
