<template>
  <v-btn @click="$emit('click')" :disabled="disabled" fab color="warning darken-1" small depressed>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'MinusBtn',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'mdi-minus'
    }
  }
};
</script>

<style scoped>

</style>
