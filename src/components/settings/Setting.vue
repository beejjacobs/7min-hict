<template>
  <setting-row :label="label">
    <template #left>
      <minus-btn @click="mutation(value - increment)" :disabled="lowest"/>
    </template>
    {{ value }}<span v-if="unit">{{ unit }}</span>
    <template #right>
      <plus-btn @click="mutation(value + increment)"/>
    </template>
  </setting-row>
</template>

<script>
import MinusBtn from '@/components/settings/MinusBtn';
import PlusBtn from '@/components/settings/PlusBtn';
import SettingRow from '@/components/settings/SettingRow';

export default {
  name: 'Setting',
  components: {SettingRow, PlusBtn, MinusBtn},
  props: {
    label: {
      type: String,
      default: 'Setting'
    },
    lowest: {
      type: Boolean,
      default: false
    },
    mutation: {
      type: Function,
      required: true
    },
    increment: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style scoped>

</style>
