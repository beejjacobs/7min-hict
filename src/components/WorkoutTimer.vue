<template>
  <div class="container__root">
    <div>Round: {{ round }}/{{ rounds }}</div>
    <div>Stage: {{ stageIndex + 1 }}/{{ stageCount }}</div>
    <timer label="Total Time" :value="elapsed" class="elapsed"/>
    <div>{{ stage.name }}</div>
    <div>{{ stage.group }}</div>
    <div class="controls">
      <button @click="start">Start</button>
      <button @click="pause">Pause</button>
      <button @click="stop">Stop</button>
    </div>

    <progress-dial-container  class="progress" :progress="remainingPerc" :radius="150">
      <timer :value="remainingMs"/>
    </progress-dial-container>
  </div>
</template>

<script>
import {timerMixin} from '@/workout/timer';
import {workoutMixin} from '@/workout/workout';
import Timer from '@/components/Timer';
import ProgressDialContainer from '@/components/ProgressDialContainer';

export default {
  name: 'WorkoutTimer',
  components: {ProgressDialContainer, Timer},
  mixins: [timerMixin, workoutMixin]
}
</script>

<style scoped>
.container__root {
  height: calc(100% - 32px);
  width: calc(100% - 32px);
  padding: 16px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

.progress {
  grid-area: 3/1/5/3;
  justify-self: center;
  align-self: center;
}
.controls {
  grid-area: 6/1/6/3;
  justify-self: center;
  align-self: center;
}
.elapsed {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

button {

}
</style>
