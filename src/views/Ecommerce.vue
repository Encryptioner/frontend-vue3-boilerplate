<template>
  <div class="min-h-screen">
    <h1>Ecommerce</h1>
    <div class="navbar">
      <div class="flex-none gap-1">
        <ul
          v-for="(navMenu, i) of navMenus"
          :key="i"
          class="menu menu-horizontal rounded-[10px] p-0"
          :class="{ 'bg-new-blue-5': focusedNavMenu == i }"
          @click="focusedNavMenu = i"
        >
          <li>
            <div class="flex flex-col gap-0 p-2">
              <FolderAddIcon
                :class="`h-5 w-5 ${focusedNavMenu === i ? 'text-new-blue-60' : 'text-new-gray-50'}`"
              />
              <span
                class="text-sm"
                :class="
                  focusedNavMenu === i
                    ? 'font-medium text-new-blue-60'
                    : 'font-normal text-new-gray-50'
                "
                >{{ navMenu }}</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { FolderAddIcon } from '@heroicons/vue/solid';

const focusedNavMenu: Ref<number> = ref(0);

const navMenus: Ref<string[]> = ref(['Clothing & Shoes', 'Entertainment']);
</script>
<style scoped></style>
