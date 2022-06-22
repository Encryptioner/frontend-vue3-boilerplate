import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import { createHead } from '@vueuse/head';
import '@/styles/postcss/index.postcss';
import '@/styles/scss/index.scss';

const head = createHead();
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(head);

app.mount('#app');
