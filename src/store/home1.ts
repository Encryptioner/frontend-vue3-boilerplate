/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Wed Jun 22 2022
 */

import { defineStore } from 'pinia';

const versionString =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_APP_VERSION + '-dev'
    : import.meta.env.VITE_APP_VERSION;

export const useHome1Store = defineStore('home1', {
  state: () => ({
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
  persist: {
    storage: window.sessionStorage,
  },
});
