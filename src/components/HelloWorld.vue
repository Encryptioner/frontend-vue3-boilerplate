<template>
  <h2 class="!mt-0 font-poppins">
    {{ props.msg }}
  </h2>
  <button
    :class="`rounded-${count ? 'full' : 'md'} border border-gray-300 bg-white px-3 py-2 shadow`"
    @click="increment"
  >
    count is: {{ count }}
  </button>
  <button
    :class="`${finalRoundedClass} ml-2 rounded-full
    border border-gray-300 bg-white px-3 py-2 shadow`"
    @click="reset"
  >
    Reset
  </button>

  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script setup lang="ts">
// useStore, and computed are automatically imported. See vite.config.ts for details.
const home1Store = useStore.home1;
const count = computed(() => home1Store.count);
const props = defineProps<{
  msg: string;
  optionalProp?: number;
}>();

const finalRoundedClass = ref<string>(`rounded-${count ? 'full' : 'md'}`);

function increment() {
  home1Store.increment();
}

function reset() {
  home1Store.$reset();
}
</script>

<style scoped lang="scss">
.btn-primary {
  @apply rounded-lg bg-blue-500 py-2 px-4 font-semibold
  text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2
  focus:ring-blue-400 focus:ring-opacity-75;
}
</style>

<style scoped lang="postcss">
.btn-secondary {
  @apply rounded-lg bg-red-500 py-2 px-4
  font-semibold text-white shadow-md hover:bg-blue-700
  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
</style>
