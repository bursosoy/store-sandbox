<template>
  <div>
    <v-card class="mx-auto" max-width="400" tile dark>
      <v-list-item two-line v-for="(setting, index) in userSettings" :key="index">
        <v-list-item-content>
          <v-list-item class="pl-0">
          <v-list-item-title>{{ setting.label }}</v-list-item-title>
          <v-switch v-model="setting.isOn"></v-switch>
          </v-list-item>
          <v-list-item-subtitle>{{ setting.desc }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      switch123: true
    }
  },
  computed: {
    userSettings() {
      return this.$store.getters.userSettings
    },
  },
}
</script>

<style></style>
