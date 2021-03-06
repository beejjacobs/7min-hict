<template>
  <svg
      :height="radius * 2"
      :width="radius * 2"
  >
    <circle
        :stroke="strokeColor"
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
    },
    strokeColor() {
      return this.$store.getters['settings/color'];
    }
  },
};
</script>

<style scoped>
circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-linecap: round;
}
</style>
