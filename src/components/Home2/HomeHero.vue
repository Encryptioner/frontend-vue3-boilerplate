<template>
  <div class="hero min-h-screen text-primary-content">
    <div class="hero-overlay place-items-center bg-gradient-to-bl from-primary to-base-100" />
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <h1 class="mb-5 text-5xl font-bold">
          Vite + Vue 3 + TypeScript + Tailwind v{{ VERSION }}
        </h1>
        <p class="mb-5">
          Mocking up web app with frontend vue boilerplate <sup>(speed)</sup>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const VERSION = import.meta.env.VITE_APP_VERSION;
</script>

<style scoped></style>
