<template>
  <v-dialog v-model="open" dark>
    <template #activator="{on}">
      <v-btn fab v-on="on" fixed bottom right small color="grey">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>Settings</v-card-title>
      <v-card-text>
        <setting
            label="Rounds"
            :lowest="rounds <= 1"
            :mutation="setRounds"
            :increment="1"
            :value="rounds"/>
        <setting
            label="Exercise Time"
            unit="s"
            :lowest="exerciseTime <= 15"
            :mutation="setExerciseTime"
            :increment="5"
            :value="exerciseTime"/>
        <setting
            label="Rest Time"
            unit="s"
            :lowest="restTime <= 5"
            :mutation="setExerciseTime"
            :increment="5"
            :value="restTime"/>
        <setting-row label="Colour">
          <template #left>
            <minus-btn @click="cycleColor(false)" icon="mdi-chevron-left"/>
          </template>

          <div class="color-preview" :style="{backgroundColor: colorValue}"/>

          <template #right>
            <plus-btn @click="cycleColor(true)" icon="mdi-chevron-right"/>
          </template>

          <template #second-row>
            <div class="colors-preview">
              <span v-for="c in colors" :key="c" :style="{backgroundColor: c}" :class="{selected: c === colorValue}">
                <v-icon v-if="c === colorValue" x-small>mdi-checkbox-blank-circle</v-icon>
              </span>
            </div>
          </template>
        </setting-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="setDefaults" icon>
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
        <v-spacer/>
        <v-btn @click="open = false" icon>
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex';
import MinusBtn from '@/components/settings/MinusBtn';
import PlusBtn from '@/components/settings/PlusBtn';
import Setting from '@/components/settings/Setting';
import SettingRow from '@/components/settings/SettingRow';

export default {
  name: 'Settings',
  components: {SettingRow, Setting, PlusBtn, MinusBtn},
  data() {
    return {
      open: false
    };
  },
  computed: {
    ...mapState('settings', [
      'color',
      'colors',
      'exerciseTime',
      'restTime',
      'rounds'
    ]),
    ...mapGetters('settings', {
      colorValue: 'color'
    })
  },
  methods: {
    ...mapMutations('settings', [
      'cycleColor',
      'setDefaults',
      'setExerciseTime',
      'setRestTime',
      'setRounds'
    ])
  }
};
</script>

<style scoped>
.color-preview {
  width: 100%;
  height: 20px;
}
.colors-preview {
  display: flex;
  height: 20px;
}
.colors-preview span {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
