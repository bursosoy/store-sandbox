<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    userBadge() {
      if (this.$store.getters.userBadge.toLowerCase() === 'beginner') {
        return this.$store.getters.userBadge + '*'
      } else {
        return this.$store.getters.userBadge
      }
    },
    promoStatus(){
      return this.$store.getters['promotions/promoStatus']
    }
  },
  methods:{
    ageDivideBy(passed){
      this.$store.dispatch('ageDivideBy',{dividend: passed, num1: 100})
    }
  }
}
</script>

<style lang="scss">
#app {
  padding: 2rem;
}
div {
  font-size: 2rem;
}
</style>
