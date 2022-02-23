<template>
  <div class="container__root">
    <div>Round: {{ round }}/{{ rounds }}</div>
    <div>Stage: {{ stageNoRestIndex + 1 }}/{{ stagesNoRestCount }}</div>
    <stage-detail :stage="stage" class="stage"/>

    <progress-dial-container  class="progress" :progress="remainingPerc" :radius="150">
      <timer :value="remainingMs"/>
    </progress-dial-container>

    <up-next class="up-next" :stage="nextStage"/>

    <div class="controls">
      <v-btn class="mx-2" @click="start" color="green" fab depressed v-if="!playing">
        <v-icon large>mdi-play</v-icon>
      </v-btn>
      <v-btn class="mx-2" @click="pause" color="amber" fab depressed v-else>
        <v-icon large>mdi-pause</v-icon>
      </v-btn>
      <v-btn class="mx-2" @click="stop" color="red" fab depressed>
        <v-icon large>mdi-stop</v-icon>
      </v-btn>
    </div>

    <elapsed-time :value="elapsed" class="elapsed"/>
    <settings/>
  </div>
</template>

<script>
import {timerMixin} from '@/workout/timer';
import {workoutMixin} from '@/workout/workout';
import Timer from '@/components/Timer';
import ProgressDialContainer from '@/components/ProgressDialContainer';
import StageDetail from '@/components/StageDetail';
import ElapsedTime from '@/components/ElapsedTime';
import Settings from '@/components/settings/Settings';
import UpNext from '@/components/UpNext';

export default {
  name: 'WorkoutTimer',
  components: {UpNext, Settings, ElapsedTime, StageDetail, ProgressDialContainer, Timer},
  mixins: [timerMixin, workoutMixin]
}
</script>

<style scoped>
.container__root {
  height: 100%;
  width: 100%;
  padding: 16px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

.stage {
  grid-area: 2/1/3/3;
  justify-self: center;
  align-self: start;
}
.progress {
  grid-area: 3/1/5/3;
  justify-self: center;
  align-self: center;
}
.up-next {
  grid-area: 5/1/6/3;
  justify-self: center;
  align-self: center;
}
.controls {
  grid-area: 6/1/7/3;
  justify-self: center;
  align-self: start;
}
.elapsed {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}
</style>
