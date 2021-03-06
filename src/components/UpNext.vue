<template>
  <div v-if="stage" class="title">
    Up Next: {{ stage.name }}
  </div>
</template>

<script>
export default {
  name: "UpNext",
  props: {
    stage: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
