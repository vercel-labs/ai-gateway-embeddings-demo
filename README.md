A simple [Next.js](https://nextjs.org) chatbot app to demonstrate the use of embedding models for RAG through the Vercel AI Gateway.

Paste any facts or docs into the chat and this app will chunk them, generate embeddings via the Vercel AI Gateway, and store them as vectors in Neon. When you ask a question, your query is embedded and the app performs a cosine-similarity search to pull the most relevant chunks. The model then answers using only the retrieved snippets, demonstrating semantic retrieval (RAG).

## Getting Started

### Setup

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-gateway-embeddings-demo&amp;project-name=ai-gateway-embeddings&amp;repository-name=ai-gateway-embeddings&amp;demo-title=AI%20Gateway%20Embeddings%20Demo&amp;demo-description=A%20simple%20Next.js%20chatbot%20app%20to%20demonstrate%20the%20use%20of%20embedding%20models%20for%20RAG%20through%20the%20Vercel%20AI%20Gateway&amp;demo-url=https%3A%2F%2Fai-gateway-embeddings-demo.labs.vercel.dev&amp;products=%5B%7B%22type%22%3A%22integration%22%2C%22protocol%22%3A%22storage%22%2C%22productSlug%22%3A%22neon%22%2C%22integrationSlug%22%3A%22neon%22%7D%5D)

1. Clone this repository with the Deploy button above
1. Install the [Vercel CLI](https://vercel.com/docs/cli) if you don't already have it (`pnpm i -g vercel`)
1. Clone the repository you created above: `git clone <repo-url>`
1. Link it to a Vercel project: `vc link` or `vc deploy`
1. Pull environment variables with `vc env pull`
1. Install packages with `pnpm i` (or `npm i` or `yarn i`)
1. Run a database migration with `pnpm db:migrate && pnpm db:push`
1. Run the development server with `vc dev` and open http://localhost:3000 to try the chatbot

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
