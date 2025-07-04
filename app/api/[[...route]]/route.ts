import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'
import accounts from "./accounts"
import categories from './categories'
import transactions from './transactions'
import summary from './summary'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

// Add CORS middleware
app.use('*', cors({
    origin: [
        'http://localhost:3000',
        'https://personal-finance-tracker-gilt.vercel.app',
        'https://personal-finance-tracker-git-main-remo1705s-projects.vercel.app',
    ],
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}))

const routes = app
    .route("/accounts", accounts)
    .route("/categories", categories)
    .route("/transactions", transactions)
    .route("/summary", summary); 


export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export const OPTIONS = handle(app); 

export type AppType = typeof routes; 

