<template>
  <ul class="c-userDataList">
    <li class="c-userDataList__item">
      <span class="c-userDataList__type">Token: </span>
      <span class="c-userDataList__value">{{ userInfo.token }}</span>
    </li>
    <li class="c-userDataList__item">
      <span class="c-userDataList__type">ID: </span>
      <span class="c-userDataList__value">{{ userInfo.id }}</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import UserData from "/components/Lists/UserData.vue";
import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();
interface UserInfo {
  id: string;
  token: string;
}
const userInfo: UserInfo = reactive({
  id: store?.getters["users/getUserInfo"].id || '',
  token: store?.getters["users/getTokenAuth"]  || ''
})
</script>
<style scoped lang="sass">
.c-userDataList
  margin: 20px 0 0 20px
  &__item
    color: $text-base-light
    &:not(:first-child)
      margin-top: 10px
</style>
