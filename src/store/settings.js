export default {
  namespaced: true,
  state: {
    rounds: 1,
    exerciseTime: 30,
    restTime: 10,
    color: 'darkturquoise'
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
    }
  }
};
