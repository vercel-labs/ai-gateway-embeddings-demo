A simple [Next.js](https://nextjs.org) chatbot app to demonstrate the use of embedding models for RAG through the Vercel AI Gateway.

## Getting Started

### One-time setup

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-gateway-embeddings-demo)

1. Clone this repository with the Deploy button above
1. Install the [Vercel CLI](https://vercel.com/docs/cli) if you don't already have it
1. Clone the repository you created above: `git clone <repo-url>`
1. Link it to a Vercel project: `vc link` or `vc deploy`

### Project setup
1. Install packages with `pnpm i` (or `npm i` or `yarn i`)
1. Follow the [database setup](README.md#database-setup) section of this guide below
1. Run the development server with `vc dev` and open http://localhost:3000 to try the chatbot

### Database setup
#### Create database
You will need a Postgres database. If you don't have Postgres setup on your local machine you can:

- Create a free Postgres database with Vercel (recommended - see instructions below); or
- Follow [this guide](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database) to set it up locally

##### Setting up Postgres with Vercel
To set up a Postgres instance on your Vercel account:

1. Go to [Vercel.com](https://vercel.com/) and make sure you're logged in
1. Navigate to your team homepage
1. Click on the **Integrations** tab
1. Click **Browse Marketplace**
1. Look for the **Storage** option in the sidebar
1. Select the **Neon** option (recommended, but any other PostgreSQL database provider should work)
1. Click **Install**, then click **Install** again in the top right corner
1. On the "Get Started with Neon" page, click **Create Database** on the right
1. Select your region (e.g., Washington, D.C., U.S. East)
1. Turn off **Auth**
1. Click **Continue**
1. Name your database (you can use the default name or rename it to something like "RagTutorial")
1. Click **Create** in the bottom right corner
1. After seeing "Database created successfully", click **Done**
1. You'll be redirected to your database instance
1. In the Quick Start section, click **Show secrets**
1. Copy the full `DATABASE_URL` environment variable

#### Migrate database
Once you have a Postgres database, you need to add the connection string as an environment secret.

Make a copy of the `.env.example` file and rename it to `.env` with `cp .env.example .env`.

Open the new .env file. You should see an item called `DATABASE_URL`. Copy in your database connection string after the equals sign.

With that set up, you can now run a database migration. Run the following commands:

```bash
pnpm db:migrate
pnpm db:push
```

### FAQ

1. If you prefer running your local development server directly rather than using `vc dev`, you'll need to run `vc env pull` to fetch the project's OIDC authentication token locally
   1. the token expires every 12h, so you'll need to re-run this command periodically.
   1. if you use `vc dev` it will auto-refresh the token for you, so you don't need to fetch it manually
1. If you're linking to an existing, older project, you may need to enable the OIDC token feature in your project settings.
   1. visit the project settings page (rightmost tab in your project's dashboard)
   1. search for 'OIDC' in settings
   1. toggle the button under "Secure Backend Access with OIDC Federation" to Enabled and click the "Save" button
1. See [this page](https://vercel.com/docs/ai-gateway/pricing) to learn how AI Gateway billing works 

## Authors

This repository is maintained by the [Vercel](https://vercel.com) team and community contributors. 

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.
