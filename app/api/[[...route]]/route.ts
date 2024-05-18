import { Hono } from 'hono'
import { handle } from 'hono/vercel' // vercelの部分をawsとかdenoとか色々変えられるんだって
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';


// later I have to remove this because plaid works with axios, doesn't work with edge
// but now just keep it
export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.get('/hello',
    clerkMiddleware(),
    (c) => {
        const auth = getAuth(c)
        if (!auth?.userId) {
            return c.json({ error: "Unauthorized" })
        }

        return c.json({
            message: 'Hello Next.js!',
            userId: auth.userId
        })
    })
    .get(
        "/hello/:test",
        zValidator("param", z.object({
            test: z.number()
        })),
        (c) => {
            const test = c.req.valid("param")
            return c.json({
                message: "Hello World",
                test: test
            })
        })
    .post("/",

        zValidator("json", z.object({
            name: z.string(),
            userId: z.number(),
        })),
        (c) => {
            const { name, userId } = c.req.valid("json")
            return c.json({})
        })

export const GET = handle(app)
export const POST = handle(app)