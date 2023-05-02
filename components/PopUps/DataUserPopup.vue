<template>
  <VueFinalModal>
    <div class="c-userInfo">
      <span class="c-userInfo__text">User ID: </span>
      <span class="c-userInfo__text">{{ id }}</span>
    </div>
  </VueFinalModal>
</template>
<script setup lang="ts">
  import { VueFinalModal } from 'vue-final-modal'
  import { useStore } from 'vuex'
  import type { id } from '@/types/id'

  const store = useStore()
  const { id: id } = store.getters["users/getUserInfo"]
</script>
<style scoped lang="sass">
  .c-userInfo
    color: #eeeeee
    padding: 50px
</style>