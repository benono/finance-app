import { Hono } from 'hono'
import { handle } from 'hono/vercel' // vercelの部分をawsとかdenoとか色々変えられるんだって
import authors from './authors'
import books from './books'

// later I have to remove this because plaid works with axios, doesn't work with edge
// but now just keep it
export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.route("/authors", authors)
app.route("/books", books)

export const GET = handle(app)
export const POST = handle(app)