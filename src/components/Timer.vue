<template>
  <div>{{ label }}: <span>{{ secondsPadded }}.{{ hundredths }}</span>s</div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    label: {
      type: String,
      default: 'Timer'
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
span {
  font-family: Consolas, monospace;
}
</style>
