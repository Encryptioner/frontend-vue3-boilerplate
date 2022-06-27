# Vite + Vue 3 + Typescript + Tailwind Starter

Simple, opinionated, **fully typed**, and **production-ready** boilerplate.

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/) - born with fastness
- 💪 [Typescript 4.7](https://www.typescriptlang.org/) - of course! necessary
- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- 🍍 [State Management via Pinia 2 with persistedstate](https://pinia.esm.dev/) - The official Vue Store that you will enjoy using
- 💡 [Vue Router v4](https://router.vuejs.org/zh/) - The official router for Vue.js
- 🎉 [NProgress](https://github.com/rstacruz/nprogress) - Page loading progress feedback
- 🎨 [Tailwind CSS v3](https://tailwindcss.com/docs/configuration) w/ following plugins and configuration preinstalled:
  - [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
  - [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
  - [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
  - [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
  - `firefox`-variant
- Automatic package and component imports w/ [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) and [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- PostCSS 8 w/ `postcss-nesting` plugin and `cssnano` for minimizing production CSS
- Alias `@` to `<project_root>/src`
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
- Using newest `script setup` syntax w/ Ref sugar (see the official [Script Setup documentation](https://vuejs.org/api/sfc-script-setup.html) and [Ref Sugar RFC](https://github.com/vuejs/rfcs/discussions/369) discussion)
- Vitest unit tests
- Playwright e2e + component tests
- GitHub workflows
  - Renovatebot for keeping up with dependencies
  - Automated unit tests
  - Automated component tests
  - Automated e2e tests
- GitLab CI config available up to versions 2.x

### Coding Style

- [Eslint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


## Project setup

### install the dependencies
```bash
pnpm i
```

### Development

Just run and visit http://localhost:8888

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.


## NOTE
1. Starter repositories:
  - [https://github.com/Uninen/vite-ts-tailwind-starter](https://github.com/Uninen/vite-ts-tailwind-starter)
  - [vite-boot](https://github.com/kirklin/vite-boot)
  
