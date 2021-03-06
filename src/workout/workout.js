import {timer} from '@/workout/timer';

export const workoutMixin = {
  data() {
    return {
      stageIndex: 0,
      startedAt: 0,
      round: 1
    };
  },
  computed: {
    stages() {
      return this.$store.getters['exercises/allStages'];
    },
    stageCount() {
      return this.stages.length;
    },
    stage() {
      return this.stages[this.stageIndex];
    },
    stageMs() {
      return this.stage.time * 1000;
    },
    sinceStageStart() {
      return this.elapsed - this.startedAt;
    },
    remainingMs() {
      return this.stageMs - this.sinceStageStart;
    },
    remainingPerc() {
      return (this.remainingMs / this.stageMs) * 100;
    },
    rounds() {
      return this.$store.state.settings.rounds;
    },
    done() {
      return this.remainingMs <= 0;
    }
  },
  watch: {
    done(done) {
      if (done) {
        if (this.stageIndex === this.stages.length - 1) {
          if (this.rounds > this.round) {
            this.round++;
            this.setStage(0);
          } else {
            this.stop();
          }
        } else {
          this.setStage(this.stageIndex + 1);
        }
      }
    }
  },
  methods: {
    start() {
      timer.start();
    },
    pause() {
      timer.pause();
    },
    stop() {
      timer.stop();
      this.setStage(0);
    },
    setStage(index) {
      this.stageIndex = index;
      this.startedAt = this.elapsed;
    }
  }
};
