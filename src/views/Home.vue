<template>
  <div class="relative min-h-screen py-8">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)]
      [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    />
    <div
      class="container relative mx-auto max-w-2xl bg-white
      shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="prose-sm px-4 pt-6 md:prose md:px-6">
        <h1>Vite + Vue 3 + TypeScript + Tailwind v{{ VERSION }}</h1>
        <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
          Simple, fully typed template
        </p>
      </header>
      <main>
        <div class="prose-indigo prose mx-auto p-4 sm:rounded-md md:px-6">
          <HelloWorld msg="Hello World Component" />
        </div>
      </main>
      <footer class="py-6 text-center text-sm text-gray-700">
        <p>
          See more at
          <a
            class="underline"
            href="https://github.com/Encryptioner/frontend-vue3-boilerplate"
          >github</a>
          &copy;{{ thisYear }}.
          <template v-if="BUILD_DATE">
            Site built {{ BUILD_DATE.toLocaleDateString() }}.
          </template>
          <template v-else>
            Development mode.
          </template>
        </p>
      </footer>
    </div>
  </div>
</template>
<script setup lang="ts">
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute();

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: 'og:title',
      content: route.meta.title,
    },
    {
      name: 'twitter:title',
      content: route.meta.title,
    },
  ],
});

const VERSION = import.meta.env.VITE_APP_VERSION;
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined;
const thisYear = new Date().getFullYear();
</script>
