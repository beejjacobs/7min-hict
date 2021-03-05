<template>
  <div :style="styles" class="root">
    <progress-dial class="progress" :progress="progress" :radius="radius"/>
    <div class="overlay">
      <slot/>
    </div>
  </div>
</template>

<script>
import ProgressDial from '@/components/ProgressDial';
export default {
  name: 'ProgressDialContainer',
  components: {ProgressDial},
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
      default: 4
    }
  },
  computed: {
    size() {
      return this.radius * 2;
    },
    styles() {
      return {
        height: this.size + 'px',
        width: this.size + 'px'
      }
    }
  }
};
</script>

<style scoped>
.root {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: xxx-large;
}
</style>
