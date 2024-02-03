import { Config, Context } from "@netlify/functions";

export default async (request: Request, context: Context) => {
    const str = context.params.str;
    console.log(str);

    return new Response('Default endpoint responded');
};
