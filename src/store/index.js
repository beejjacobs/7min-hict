import Vue from 'vue';
import Vuex from 'vuex';

import exercises from '@/store/exercises';
import serviceWorker from '@/store/service-worker';
import settings from '@/store/settings';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    exercises,
    serviceWorker,
    settings
  },
  plugins: [createPersistedState({paths: ['settings']})]
});
