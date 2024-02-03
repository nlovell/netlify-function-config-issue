import { Config, Context } from "@netlify/functions";

export default async (request: Request, context: Context) => {
    const str = context.params.str;
    console.log(str);

    return new Response(`String provided: ${str}`);
};

export const config: Config = {
    path: ["/api/public/:str"]
};
