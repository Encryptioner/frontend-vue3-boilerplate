<template>
  <div class="flex flex-col items-center gap-20 bg-base-100 py-20">
    <div class="mockup-phone">
      <div class="camera" />
      <div class="display">
        <div class="phone-1 artboard artboard-demo">
          <p class="text-10xl text-base font-medium uppercase tracking-wide">
            Counter:
          </p>
          <p class="text-10xl text-base font-bold uppercase">
            {{ home2Store.count }}
          </p>
          <button
            type="button"
            class="btn btn-primary"
            @click="home2Store.increment()"
          >
            <FolderAddIcon class="h-5 w-5 text-red-500" />increment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FolderAddIcon } from '@heroicons/vue/solid';

const home2Store = useStore.home2;
</script>
