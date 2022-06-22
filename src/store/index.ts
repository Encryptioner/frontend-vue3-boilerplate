import { useCounterStore } from '@/store/counter';
import { useMainStore } from '@/store/main';

interface IAppUseStore {
  counter: ReturnType<typeof useCounterStore>;
  main: ReturnType<typeof useMainStore>;
}

const useStore = {} as IAppUseStore;

const registerStore = () => {
  useStore.counter = useCounterStore();
  useStore.main = useMainStore();
};

export { registerStore, useStore };
