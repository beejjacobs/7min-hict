<template>
  <v-btn @click="$emit('click')" :disabled="disabled" fab color="success darken-1" small depressed>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'PlusBtn',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'mdi-plus'
    }
  }
};
</script>

<style scoped>

</style>
