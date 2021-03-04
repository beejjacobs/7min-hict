<template>
  <div>
    <h2>Timer</h2>
    <div>Round: {{ round }}/{{ rounds }}</div>
    <div>Stage: {{ stageIndex + 1 }}/{{ stageCount }}</div>
    <timer :value="elapsed"/>
    <timer label="Remaining" :value="remainingMs"/>
    <div>{{ stage.name }}</div>
    <div>{{ stage.group }}</div>
    <button @click="start">Start</button>
    <button @click="pause">Pause</button>
    <button @click="stop">Stop</button>

    <progress-dial :progress="remainingPerc"/>
  </div>
</template>

<script>
import {timerMixin} from '@/workout/timer';
import {workoutMixin} from '@/workout/workout';
import Timer from '@/components/Timer';
import ProgressDial from '@/components/ProgressDial';

export default {
  name: 'WorkoutTimer',
  components: {ProgressDial, Timer},
  mixins: [timerMixin, workoutMixin]
}
</script>

<style scoped>

</style>
