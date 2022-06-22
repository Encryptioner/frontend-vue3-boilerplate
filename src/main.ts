import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from '@/App.vue';
import router from '@/router';
import { createHead } from '@vueuse/head';
import { registerStore } from '@/store';
import '@/styles/postcss/index.postcss';
import '@/styles/scss/index.scss';

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(head);

registerStore();

app.mount('#app');
