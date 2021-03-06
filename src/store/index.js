import Vue from 'vue';
import Vuex from 'vuex';

import exercises from '@/store/exercises';
import settings from '@/store/settings';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    exercises,
    settings
  },
  plugins: [createPersistedState({paths: ['settings']})]
});
