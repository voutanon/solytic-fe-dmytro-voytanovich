<template>
  <ul class="c-userDataList">
    <li class="c-userDataList__item">
      <span class="c-userDataList__type">Token: </span>
      <span class="c-userDataList__value">{{ token }}</span>
    </li>
    <li class="c-userDataList__item">
      <span class="c-userDataList__type">ID: </span>
      <span class="c-userDataList__value">{{ id }}</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import UserData from "/components/Lists/UserData.vue"
import { useStore } from 'vuex'

  const store = useStore()
  const { id } = store.getters["users/getUserInfo"]
  const token = store.getters["users/getTokenAuth"]
</script>
<style scoped lang="sass">
  .c-userDataList
    margin: 20px 0 0 20px
    &__item
      color: #eeeeee
      &:not(:first-child)
        margin-top: 10px
</style>
