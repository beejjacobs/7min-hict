<template>
  <div v-if="stage">
    <div class="display-1">{{ stage.name }}</div>
    <div class="title">{{ stage.group }}</div>
  </div>
</template>

<script>
export default {
  name: 'StageDetail',
  props: {
    stage: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
