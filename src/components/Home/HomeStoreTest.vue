<template>
  <div class="flex flex-col items-center gap-20 bg-base-100 py-20">
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-1">
          <p class="text-10xl text-base font-medium uppercase tracking-wide">Counter:</p>
          <p class="text-10xl text-base font-bold uppercase">
            {{ counterStore.count }}
          </p>
          <button type="button" class="btn btn-primary" @click="counterStore.increment()">
            <FolderAddIcon class="h-5 w-5 text-red-500"></FolderAddIcon>increment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FolderAddIcon } from '@heroicons/vue/solid';

const counterStore = useStore.counter;
</script>

<!-- READING MATERIAL -->

<!-- https://blog.logrocket.com/complex-vue-3-state-management-pinia/ -->

<!-- https://medium.com/geekculture/emergency-pinia-course-7a80b8ed0b04 -->

<!-- https://www.youtube.com/watch?v=059fh7Gobho -->
