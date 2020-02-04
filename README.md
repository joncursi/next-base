# Next Base

⏭️ Base setup for a [Next.js](https://nextjs.org/) front-end. Includes:

* [Next Routes](https://github.com/fridays/next-routes) for dynamic routing
* [Dotenv CLI](https://github.com/entropitor/dotenv-cli) for environment
variables
* [TypeScript](https://www.typescriptlang.org/) as the language
* [Express](https://expressjs.com/) as the server
* [Material UI](https://material-ui.com/) as the design system
* [Styled JSX](https://github.com/zeit/styled-jsx) for CSS in JS
* [Jest](https://jestjs.io/) as the test runner
* [ESLint](https://eslint.org/) for code linting (via
[`@joncursi/eslint-config`](https://github.com/joncursi/eslint-config))
* [CommitLint](https://commitlint.js.org/) for commit linting (via
[`@joncursi/eslint-config`](https://github.com/joncursi/eslint-config))
* [Prettier](https://prettier.io/) for code formatting (via
[`@joncursi/eslint-config`](https://github.com/joncursi/eslint-config))
* [Fastlane](https://fastlane.tools/) for deployments to [Now](https://zeit.co/)

[![CircleCI](https://circleci.com/gh/joncursi/next-base.svg?style=shield)](https://circleci.com/gh/joncursi/next-base)

## Getting Started

1. Install node modules:

    ```shell
    npm install
    ```

2. Create a `.env` file in the root of this project and fill it with
[environment variables](https://github.com/joncursi/next-base/blob/master/.env.example).

3. Start the server:

    ```shell
    npm run dev
    ```

## npm Scripts

There are lots of npm scripts at your disposal during local development.
Here are some of the more important ones:

| Start command          | Description                                            |
|:---------------------- |:------------------------------------------------------ |
| npm run analyze        | Shows interactive visualization of the webpack bundle. |
| npm run dev            | Starts the local dev server.                           |
