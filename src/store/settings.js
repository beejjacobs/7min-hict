export default {
  namespaced: true,
  state: {
    rounds: 1,
    exerciseTime: 30,
    restTime: 10,
    color: 1,
    colors: [
      '#3F51B5',
      '#2196F3'
    ]
  },
  getters: {
    color(state) {
      return state.colors[state.color];
    }
  },
  mutations: {
    setRounds(state, r) {
      state.rounds = r;
    },
    setExerciseTime(state, e) {
      state.exerciseTime = e;
    },
    setRestTime(state, r) {
      state.restTime = r;
    },
    setColor(state, c) {
      state.color = c;
    },
    cycleColor(state, forward) {
      const colorCount = state.colors.length;
      const newIndex = state.color + (forward ? 1 : -1);
      if (newIndex < 0) {
        state.color = colorCount - 1;
      } else if (newIndex >= colorCount) {
        state.color = 0;
      } else {
        state.color = newIndex;
      }
    },
    setDefaults(state) {
      state.rounds = 1;
      state.exerciseTime = 30;
      state.restTime = 10;
      state.color = 1;
    }
  }
};
