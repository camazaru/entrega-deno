import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

const getHello = async (ctx: Context): Promise<void> => {

    ctx.response.status = 200;
    ctx.response.body =  `
    <!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1 style="color: blue;">Hello</h1>
      </body>
    </html>
    `;
  }


export default {getHello}
