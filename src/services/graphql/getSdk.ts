import type { EnvGetter } from "@builder.io/qwik-city/middleware/request-handler";
import { print } from "graphql";
import { GraphQLClient } from "graphql-request";
import type { Requester } from "./__generated/sdk";
import { getSdk as getSdkWithClient } from "./__generated/sdk";

export const getSdkWithEnv = (env: EnvGetter) => {
    const requester: Requester<any> = async (doc: any, vars: any) => {
        const CAISY_PROJECT_ID = env.get("CAISY_PROJECT_ID");
        const CAISY_API_KEY = env.get("CAISY_API_KEY");
        const NODE_ENV = env.get("NODE_ENV");
        if (!CAISY_PROJECT_ID || CAISY_PROJECT_ID == "") {
            throw new Error("CAISY_PROJECT_ID is not defined - please add it to the env file");
        }
        if (!CAISY_API_KEY || CAISY_API_KEY == "") {
            throw new Error("CAISY_API_KEY is not defined - please add it to the env file");
        }

        const client = new GraphQLClient(`https://cloud.caisy.io/api/e/v4/${CAISY_PROJECT_ID}/graphql`, {
            fetch,
            headers: {
                "x-caisy-apikey": `${CAISY_API_KEY}`,
                "x-caisy-preview": "true",
            },
        });

        // const randomID = Math.random().toString(36).substring(7);
        // try {
        //     console.time(`GraphQL request ${randomID}`);
        //     const startTime = process.hrtime();
        //     const res = await client.rawRequest(print(doc), vars);
        //     const endTime = process.hrtime(startTime);
        //     const duration = endTime[0] * 1000 + endTime[1] / 1000000;
        //     if (duration > 1000) {
        //         console.log(``, print(doc));
        //         console.warn(`GraphQL request ${randomID} took ${duration}ms`);
        //     }
        //     return res?.data as any;

        try {
            const res = await client.rawRequest(print(doc), vars);
            return res.data as any;
        } catch (err: any) {
            if (NODE_ENV == "development") {
                console.error("Error in GraphQL request:", "\n" + print(doc) + "\n", vars, "\n" + err.message);
            } else {
                console.error(err);
            }
        }
    };
    return getSdkWithClient(requester) as ReturnType<typeof getSdkWithClient>;
};
