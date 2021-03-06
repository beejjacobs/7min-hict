<template>
  <v-row align="center">
    <v-col cols="5">{{ label }}</v-col>
    <v-col><slot name="left"/></v-col>
    <v-col><slot/></v-col>
    <v-col><slot name="right"/></v-col>

    <template v-if="$scopedSlots['second-row']">
      <v-col cols="5" class="pa-0"/>
      <v-col class="pa-0"><slot name="second-row"/></v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  name: 'SettingRow',
  props: {
    label: {
      type: String,
      default: 'Setting'
    }
  }
};
</script>

<style scoped>

</style>
