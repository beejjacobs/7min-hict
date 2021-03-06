<template>
  <div>
    <span v-if="label">{{ label }}: </span>
    <span class="time">{{ display }}</span>
  </div>
</template>

<script>
export default {
  name: 'ElapsedTime',
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalSeconds() {
      return Math.floor(this.value / 1000);
    },
    minutes() {
      return Math.floor(this.totalSeconds / 60);
    },
    seconds() {
      return Math.floor(this.totalSeconds % 60);
    },
    secondsPadded() {
      if (this.seconds >= 10) {
        return this.seconds;
      }
      return '0' + this.seconds;
    },
    display() {
      return `${this.minutes}:${this.secondsPadded}`;
    }
  }
};
</script>

<style scoped>
div {
  font-size: xx-large;
}
.time {
  font-family: Consolas, monospace;
}
</style>
