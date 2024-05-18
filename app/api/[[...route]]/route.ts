import { Hono } from 'hono'
import { handle } from 'hono/vercel'
// ↑のvercelの部分をawsとかdenoとか色々変えられるんだって

// later I have to remove this because plaid works with axios, doesn't work with edge
// but now just keep it
export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
    return c.json({
        message: 'Hello Next.js!',
    })
})

export const GET = handle(app)
export const POST = handle(app)