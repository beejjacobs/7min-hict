<template>
  <div id="app">
    <workout-timer/>
  </div>
</template>

<script>
import WorkoutTimer from './components/WorkoutTimer.vue'

export default {
  name: 'App',
  components: {
    WorkoutTimer
  }
}
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-size: x-large;
}
/* reset */
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;
  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;
}
</style>
