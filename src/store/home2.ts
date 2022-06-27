import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useHome2Store = defineStore(
  'counter',
  () => {
    const count = ref<number>(1);
    function increment() {
      count.value++;
    }

    return { count, increment };
  },
  {
    persist: {
      storage: window.sessionStorage,
    },
  }
);
