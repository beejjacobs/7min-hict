<template>
  <svg
      :height="radius * 2"
      :width="radius * 2"
  >
    <circle
        :stroke-dasharray="circumference + ' ' + circumference"
        :style="{ strokeDashoffset: strokeDashoffset }"
        :stroke-width="stroke"
        fill="transparent"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
    />
  </svg>
</template>

<script>
export default {
  name: 'ProgressDial',
  props: {
    radius: {
      type: Number,
      default: 100
    },
    progress: {
      type: Number,
      default: 0
    },
    stroke: {
      type: Number,
      default: 8
    }
  },
  computed: {
    normalizedRadius() {
      return this.radius - this.stroke * 2;
    },
    circumference() {
      return this.normalizedRadius * 2 * Math.PI;
    },
    strokeDashoffset() {
      return this.circumference - this.progress / 100 * this.circumference;
    }
  },
};
</script>

<style scoped>
circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-linecap: round;
  stroke: darkturquoise;
}
</style>
