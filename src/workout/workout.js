import {AllStages} from '@/workout/exercises';
import {timer} from '@/workout/timer';

export const workoutMixin = {
  data() {
    return {
      stageCount: AllStages.length,
      stageIndex: 0,
      startedAt: 0,
      rounds: 1,
      round: 1
    };
  },
  computed: {
    stage() {
      return AllStages[this.stageIndex];
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
    done() {
      return this.remainingMs <= 0;
    }
  },
  watch: {
    done(done) {
      if (done) {
        if (this.stageIndex === AllStages.length - 1) {
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
