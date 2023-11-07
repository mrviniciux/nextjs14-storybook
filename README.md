# nextjs14-storybook

* Node v20.9.0
* Storybook v7.5.3

## Whats up with Next14 and Storybook v7?

When trying to install extra addons like `@storybook/addon-essentials`, `@storybook/addon-links`, `@storybook/addon-mdx-gfm` and build storybook (`yarn build:storybook`) throws the following error:

```
SPDTI-148455:nextjs14-storybook 99765$ yarn build:storybook
yarn run v1.22.19
$ storybook build
🔴 Error: It looks like you are having a known issue with package hoisting.
Please check the following issue for details and solutions: https://github.com/storybookjs/storybook/issues/22431#issuecomment-1630086092


/Users/99765/Software/nextjs14-storybook/node_modules/cli-table3/src/utils.js:1
const stringWidth = require('string-width');
                    ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/99765/Software/nextjs14-storybook/node_modules/string-width/index.js from /Users/99765/Software/nextjs14-storybook/node_modules/cli-table3/src/utils.js not supported.
Instead change the require of index.js in /Users/99765/Software/nextjs14-storybook/node_modules/cli-table3/src/utils.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/Users/99765/Software/nextjs14-storybook/node_modules/cli-table3/src/utils.js:1:21)
    at Object.<anonymous> (/Users/99765/Software/nextjs14-storybook/node_modules/cli-table3/src/table.js:2:15)
    at Object.<anonymous> (/Users/99765/Software/nextjs14-storybook/node_modules/cli-table3/index.js:1:18)
    at Object.<anonymous> (/Users/99765/Software/nextjs14-storybook/node_modules/@storybook/core-server/dist/index.js:104:2802)
    at Object.<anonymous> (/Users/99765/Software/nextjs14-storybook/node_modules/@storybook/cli/dist/generate.js:11:4494)
    at Object.<anonymous> (/Users/99765/Software/nextjs14-storybook/node_modules/@storybook/cli/bin/index.js:26:1)
    at Object.<anonymous> (/Users/99765/Software/nextjs14-storybook/node_modules/storybook/index.js:3:1) {
  code: 'ERR_REQUIRE_ESM'
}

Node.js v20.9.0
error Command failed with exit code 7.
```

And even if remove those addons from `package.json` and execute `yarn` again the problem persists.

## Solution

Removing those addons from package.json, excluding yarn.lock and executing `yarn` again solves the problem. 🍁


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
