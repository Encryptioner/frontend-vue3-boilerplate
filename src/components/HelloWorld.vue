<template>
  <h2 class="!mt-0 font-poppins">{{ props.msg }}</h2>
  <button
    :class="`rounded-${count ? 'full' : 'md'} border border-gray-300 bg-white px-3 py-2 shadow`"
    @click="increment"
  >
    count is: {{ count }}
  </button>
  <button
    :class="`${finalRoundedClass} ml-2 rounded-full border border-gray-300 bg-white px-3 py-2 shadow`"
    @click="reset"
  >
    Reset
  </button>

  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script setup lang="ts">
// useStore, and computed are automatically imported. See vite.config.ts for details.
const mainStore = useStore.main;
const count = computed(() => mainStore.count);
const props = defineProps<{
  msg: string;
  optionalProp?: number;
}>();

const finalRoundedClass = ref<string>(`rounded-${count ? 'full' : 'md'}`);

function increment() {
  mainStore.increment();
}

function reset() {
  mainStore.$reset();
}
</script>
