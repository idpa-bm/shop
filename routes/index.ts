import { Handlers } from "$fresh/server.ts";

const getUrl = (req: Request): string => {
    const url = new URL(req.url);
    return `${url.protocol}//${url.host}/direct`;
};
  
export const handler: Handlers = {
  GET(req) {
    return new Response(null, {
        status: 302,
        headers: { Location: getUrl(req) },
      });  },
};
