<template>
  <Header v-if="tokenCookie" class="c-container" />
  <header v-else></header>
  <main class="c-container">
    <slot />
  </main>
</template>
<script setup lang="ts">
import Header from "@/components/LayoutElements/Header.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const tokenCookie: object = computed((): boolean => {
  return store?.getters["users/getTokenAuth"] ? true : false;
});
</script>
<style lang="sass">
*
  margin: 0
  padding: 0
  font-family: Arial, Helvetica, sans-serif
body
  margin: 0
#__nuxt
  display: grid
  grid-template-rows: max-content 1fr
  grid-template-columns: 1fr
  grid-row-gap: 15px
  justify-content: center
  min-height: calc(100vh - 20px)
  padding: 10px
  background: $background-base
</style>
