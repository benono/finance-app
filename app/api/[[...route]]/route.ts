import { Hono } from 'hono'
import { handle } from 'hono/vercel' // vercelの部分をawsとかdenoとか色々変えられるんだって

import accounts from "./accounts";
import { HTTPException } from 'hono/http-exception';
// later I have to remove this because plaid works with axios, doesn't work with edge
// but now just keep it
export const runtime = 'edge';

const app = new Hono().basePath('/api')
app.onError((err, c) => {
    if (err instanceof HTTPException) {
        return err.getResponse()
    }
    return c.json({ error: "Internal error" }, 500)
})
const routes = app
    .route("/accounts", accounts)
export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes
// refer 2:14:55 at youtube