# Documentation

## Features

### ```add icons```

- ![Alt text](https://api.iconify.design/vscode-icons:file-type-light-pnpm.svg) [pnpm](https://pnpm.io/)
- ![Alt text](https://api.iconify.design/logos:vitejs.svg) [Vite](https://github.com/vitejs/vite)
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-reactjs.svg) [React](https://github.com/facebook/react)
- ![Alt text](https://api.iconify.design/logos:esbuild.svg) [ESBuild](https://github.com/evanw/esbuild)
- ![Alt text](https://api.iconify.design/file-icons:windi.svg) [Windi CSS](https://windicss.org/) - on-demand CSS
  utilities
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-apib2.svg) [axios](https://github.com/axios/axios)
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-typescript-official.svg) [TypeScript](https://github.com/microsoft/TypeScript)
- ![Alt text](https://api.iconify.design/vscode-icons:folder-type-route.svg) [File based routing](https://github.com/hannoeru/vite-plugin-pages)
- ![Alt text](https://api.iconify.design/logos:pwa.svg) [PWA](https://github.com/antfu/vite-plugin-pwa)
- 😃[Use icons from any icons sets](https://github.com/antfu/unplugin-icons) - 🔍[Browse icons](https://icones.js.org/)
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-markdown.svg) [Markdown support](https://github.com/brillout/vite-plugin-mdx)
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import)
- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters) - **check if only working with ssg**
- ![Alt text](https://api.iconify.design/vscode-icons:file-type-testts.svg) Unit testing
  with ![Alt text](https://api.iconify.design/vscode-icons:file-type-jest.svg) [Jest](https://jestjs.io/), E2E Testing
  with ![Alt text](https://api.iconify.design/vscode-icons:file-type-cypress.svg) [Cypress](https://www.cypress.io/).
- ![Alt text](https://api.iconify.design/simple-icons:i18next.svg) [i18n ready]()
  with ![Alt text](https://api.iconify.design/vscode-icons:file-type-light-yaml.svg) YAML
- State management:
    - ![Alt text](https://api.iconify.design/flat-color-icons:document.svg) form state
      with [Formik](https://formik.org/docs/overview),
      and ![Alt text](https://api.iconify.design/logos:xstate.svg) [xState](https://xstate.js.org/) for more complex
      ones.
    - ![Alt text](https://api.iconify.design/flat-ui:user-interface.svg) UI State with  [Recoil](https://recoiljs.org/)
    - Server cache states with [React Query](https://react-query.tanstack.com/overview)
    - ![Alt text](https://api.iconify.design/simple-icons:immer.svg) [Immer](https://immerjs.github.io/immer/) for
      mutable state.
- ![alt-text](https://api.iconify.design/icon-park:dark-mode.svg) Dark Mode - support toggle dark mode
- Deploy to ![Alt text](https://api.iconify.design/logos:google-cloud.svg) [GCloud App Engine]()
  with ![Alt text](https://api.iconify.design/logos:github-octocat.svg) [GitHub Actions]()(CICD)

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm serve` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with the Cypress Test Runner.
- `pnpm test:e2e:headless` - run all e2e tests headlessly.
- `pnpm format` - format all files with Prettier.
- `pnpm lint` - runs TypeScript, ESLint and Stylelint.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.

