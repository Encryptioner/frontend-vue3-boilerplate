import { useHome2Store } from '@/store/home2';
import { useHome1Store } from '@/store/home1';

interface IAppUseStore {
  home2: ReturnType<typeof useHome2Store>;
  home1: ReturnType<typeof useHome1Store>;
}

const useStore = {} as IAppUseStore;

const registerStore = () => {
  useStore.home2 = useHome2Store();
  useStore.home1 = useHome1Store();
};

export { registerStore, useStore };
