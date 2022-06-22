import { counter } from '@/store/counter';

const appStore: any = {};

export const registerStore = () => {
  appStore.counter = counter();
};

export default appStore;
