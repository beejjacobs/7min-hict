import {allStages} from '@/workout/exercises';

export default {
  namespaced: true,
  getters: {
    allStages(state, getters, rootState) {
      const settings = rootState.settings;
      return allStages(settings);
    }
  }
}
