# Multilingual technology website template

using qwik as meta framework and caisy as headless CMS

Deploy this template to Vercel
<br>
<br>
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaisy-io%2Ftechnology-template-qwik&env=CAISY_PROJECT_ID,CAISY_API_KEY&envDescription=CAISY_PROJECT_ID%20and%20CAISY_API_KEY%20is%20required%20for%20the%20tempalte%20to%20work&envLink=https%3A%2F%2Fcaisy.io%2Fdeveloper%2Fdocs%2Fauthentication%2Fapi-keys&project-name=caisy-technology-template-qwik&repository-name=caisy-technology-template-qwik&demo-title=caisy-technology-template-qwik&demo-description=Example%20Deployment%20of%20this%20Template&demo-url=https%3A%2F%2Fcaisy-technology-template-qwik.vercel.app)

### Features

- ✅ 90+ Lighthouse performance
- ✅ Multilingual/i18n support
- ✅ Optimized for SEO
- ✅ Images optmized with CMS cms integartion
- ✅ Dynamic content updates from caisy without redeployment
- ✅ Sitemap support
- ✅ Robots.txt support
- ✅ Full typesafey with graphql type generation

## Requirements

In order to have the right blueprints configured, make sure to follow the onboarind on [caisy.io](https://caisy.io/) and select the starter template _"Simple Blog"_
To run this project a `.env` file like this (with your own projects values) is required:

```
CAISY_PROJECT_ID=a894c383-edfc-4499-a639-a40509986ed4
CAISY_API_KEY=xxx
```

### To run this project locally

- [ ] `git clone https://github.com/caisy-io/technology-template-qwik.git`
- [ ] create `.env` file with your project id and API key - see `.env.example`
- [ ] `npm install`
- [ ] `npm run dev`

In order to have the right blueprints configured, make sure to follow the onboarind and select the starter template "Simple Blog"

### We are using

- Qwik/Qwikcity as the meta framework
- tailwindcss for styling
- @caisy/rich-text-react-renderer to render the caisy richtexts in react
- graphql and graphql-request to fetch data from caisy

#### Codegen

During development we generate code using

- @graphql-codegen/cli and plugins

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                                   |
| :------------------ | :------------------------------------------------------- |
| `npm install`       | Installs dependencies                                    |
| `npm run dev`       | Starts local dev server at `localhost:3000`              |
| `npm run gen`       | Regenerates generated types and SDK                      |
| `npm run gen:watch` | Wachting changes and regenerates generated types and SDK |
| `npm run build`     | Build your production site to `./dist/`                  |

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `bun qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```shell
npm run qwik add # or `bun qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `bun start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `bun preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `bun build`
```

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `yarn build.server` and `yarn build.client`:

```shell
npm run build
```

[Read the full guide here](https://github.com/QwikDev/qwik/blob/main/starters/adapters/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
npm run deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
