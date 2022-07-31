# Documentation

[![Viterect](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/rtddw4&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/rtddw4/runs)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![license](https://img.shields.io/badge/license-MIT-green.svg)]()

## Description

This is a boilerplate/template I built from scratch with a lot of usefull tools configured and ready to use. <br/>
So if you wanna start a new project and don't want to waste time on configuration and figure out how to set it all up, <br/>
just clone and start to code! 😉

## Features

- ![Alt text](https://api.iconify.design/vscode-icons:file-type-light-pnpm.svg) [pnpm](https://pnpm.io/)
- ![Alt text](https://api.iconify.design/logos:vitejs.svg) [Vite](https://github.com/vitejs/vite)
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-reactjs.svg) [React](https://github.com/facebook/react)
- ![Alt text](https://api.iconify.design/logos:esbuild.svg) [ESBuild](https://github.com/evanw/esbuild)
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-tailwind.svg) [tailwindcss](https://github.com/tailwindlabs/tailwindcss) - on-demand CSS utilities
- ![Alt text](.github/assets/logo-daisyui.svg) [DaisyUI](https://github.com/saadeghi/daisyui)
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-apib2.svg) [axios](https://github.com/axios/axios)
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-typescript-official.svg) [TypeScript](https://github.com/microsoft/TypeScript)
- ![Alt text](https://api.iconify.design/vscode-icons:folder-type-route.svg) [File based routing](https://github.com/hannoeru/vite-plugin-pages)
- ![Alt text](https://api.iconify.design/logos:pwa.svg) [PWA](https://github.com/antfu/vite-plugin-pwa)
- 😃[Use icons from any icons sets](https://github.com/antfu/unplugin-icons) -
  🔍[Browse icons here](https://icones.js.org/)
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-markdown.svg) [Markdown support](https://github.com/Leonewu/vite-plugin-react-md)
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import)
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-testts.svg) Unit testing
  with ![Alt text](https://api.iconify.design/vscode-icons:file-type-jest.svg) [Jest](https://jestjs.io/), E2E Testing
  with ![Alt text](https://api.iconify.design/vscode-icons:file-type-cypress.svg) [Cypress](https://www.cypress.io/).
- ![Alt text](.github/assets/simple-icons_i18next.svg) [i18n ready]()
  with ![Alt text](https://api.iconify.design/vscode-icons:file-type-light-yaml.svg) YAML
- State management:
  - form state with ![Alt text](./.github/assets/formik.svg) [Formik](https://formik.org/docs/overview),
    and ![Alt text](.github/assets/logos_xstate.svg) [xState](https://xstate.js.org/) for more complex ones.
  - ![Alt text](.github/assets/recoil.svg) UI State with  [Recoil](https://recoiljs.org/)
  - Server cache states
    with ![Alt text](.github/assets/emblem-light-628080660fddb35787ff6c77e97ca43e.svg)  [React Query](https://react-query.tanstack.com/overview)
  - ![Alt text](.github/assets/simple-icons_immer.svg) [Immer](https://immerjs.github.io/immer/) for mutable state.
- ![alt-text](https://api.iconify.design/icon-park:dark-mode.svg) Dark Mode - support toggle dark mode
- Deploy to ![Alt text](https://api.iconify.design/logos:google-cloud.svg) [GCloud App Engine]()
  with ![Alt text](https://api.iconify.design/logos:github-octocat.svg) [GitHub Actions]()(CICD)

## Getting Started

> Viterect requires Node >= 14

[Create a repo from this template on GitHub](https://github.com/refaelbenzvi24/viterect/generate).

or

clone the repo `git clone git@github.com:Refaelbenzvi24/Viterect.git my-viterect-app`
\ `npx degit refaelbenzvi24/viterect my-viterect-app`

then

```bash
cd my-viterect-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

### Before you start coding

When you use this template, try follow the checklist to update your info properly

- [ ] Modify or delete the `LICENSE` file.
- [ ] Change `VITE_APP_NAME` in the `.env` file.
- [ ] Change the favicon in `public`
- [ ] If you don't plan to use GitHub Actions, delete the .github directory.
- [ ] Clean up the READMEs and remove routes
- [ ] Change the name field in package.json.

And, enjoy :)

## Scripts

- `pnpm start` - build and start production server
- `pnpm start:test` - build and start production server in test mode.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm build:test` - build for testing. The generated files will be on the `tests/dist` folder.
- `pnpm serve` - locally start the production build.
- `pnpm serve:test` - locally start the testing build.
- `pnpm clean` - clean build directory
- `pnpm commit` - commit using commitizen
- `pnpm dev` - start a development server with hot reload.
- `pnpm dev:test` - start a development server with hot reload in test mode - used for running cypress tests with
  coverage.
- `extract-translations` - extract translations from source files using `i18next`. configuration file for this is
  on `i18next-parser.config.js`. The generated files will be on the `public/locales` folder.
- `pnpm prepare:husky` - install husky.
- `pnpm lint` - runs TypeScript and ESLint.
- `pnpm lint:eslint` - runs ESLint.
- `pnpm lint:tsc` - runs TypeScript.
- `pnpm test` - run unit tests.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with the Cypress Test Runner.
- `pnpm test:e2e:headless` - run all e2e tests headlessly.
- `pnpm test:e2e:ci` - run all e2e tests for CI Environment.
- `pnpm coverage:jest` - open the coverage report in the browser for jest.
- `pnpm coverage:cypress` - open the coverage report in the browser for cypress.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.

## Deploy to GCloud

### Setup

Generate a [service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) copy the
whole file object content to the [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
with the key PROJECT_GCP_KEY and the project id to PROJECT_GCP_ID,

### Deployment

Every push to the master/main branch will trigger a deployment to GCloud.
