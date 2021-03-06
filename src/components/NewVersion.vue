<template>
  <v-alert :value="show" color="success" dismissible dense>
    <span>Update available</span>
   <template #prepend>
     <v-btn icon @click="reload">
       <v-icon>mdi-refresh</v-icon>
     </v-btn>
   </template>
  </v-alert>
</template>

<script>
export default {
  name: 'NewVersion',
  computed: {
    color() {
      return this.$store.getters['settings/color'];
    },
    show() {
      return this.$store.getters['serviceWorker/hasUpdate'];
    }
  },
  methods: {
    async reload() {
      await this.$store.dispatch('serviceWorker/reload');
      location.reload();
    }
  }
};
</script>

<style scoped>

</style>
