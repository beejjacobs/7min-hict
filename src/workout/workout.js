import {timer} from '@/workout/timer';
import {releaseWakeLock, requestWakeLock} from '@/workout/wake-lock';

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
    nextStage() {
      if (this.stageIndex !== this.stageCount - 1) {
        return this.stages[this.stageIndex + 1];
      }
      return null;
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
      requestWakeLock().catch(console.error);
    },
    pause() {
      timer.pause();
      releaseWakeLock().catch(console.error);
    },
    stop() {
      timer.stop();
      this.setStage(0);
      releaseWakeLock().catch(console.error);
    },
    setStage(index) {
      this.stageIndex = index;
      this.startedAt = this.elapsed;
    }
  }
};
