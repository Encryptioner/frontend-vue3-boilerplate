/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Wed Jun 22 2022
 */

import { defineStore } from 'pinia';

interface IMainState {
  debug: boolean;
  version: string;
  isInitialized: boolean;
  count: number;
}

const versionString =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_APP_VERSION + '-dev'
    : import.meta.env.VITE_APP_VERSION;

export const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    debug: import.meta.env.MODE === 'development',
    version: versionString,
    isInitialized: false,
    count: 0,
  }),

  actions: {
    initApp() {
      this.isInitialized = true;
      console.log('app initialized!');
    },

    increment(value = 1) {
      this.count += value;
    },
  },

  getters: {
    isReady: (state) => {
      return !state.isInitialized;
    },
  },
});
