<template>
  <Header v-if="tokenCookie" class="c-container" />
  <div v-else></div>
  <main class="c-container">
    <slot />
  </main>
</template>
<script setup lang="ts">
import Header from "/components/LayoutElements/Header.vue"
import { computed } from 'vue'
import { useStore } from 'vuex'

  const store = useStore()
  const tokenCookie: object = computed((): object => {
    return store.getters["users/getTokenAuth"]
  })
</script>
<style scoped lang="sass">
</style>
