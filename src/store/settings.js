const colors = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#607D8B'
];

export default {
  namespaced: true,
  state: {
    rounds: 1,
    exerciseTime: 30,
    restTime: 10,
    color: 5
  },
  getters: {
    color(state) {
      return colors[state.color];
    },
    colors() {
      return colors;
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
      const colorCount = colors.length;
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
      state.color = 5;
    }
  }
};
