<template>
  <div>
    <span v-if="label">{{ label }}: </span>
    <span class="time">{{ seconds }}.{{ hundredths }}</span>s
  </div>
</template>

<script>
export default {
  name: 'Timer',
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
    seconds() {
      return Math.floor(this.value / 1000);
    },
    secondsPadded() {
      if (this.seconds >= 10) {
        return this.seconds;
      }
      return '0' + this.seconds;
    },
    ms() {
      return this.value % 1000;
    },
    hundredths() {
      return Math.floor(this.ms / 100);
    }
  }
};
</script>

<style scoped>
.time {
  font-family: Consolas, monospace;
}
</style>
