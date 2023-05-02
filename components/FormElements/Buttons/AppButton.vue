<template>
  <button class="c-button" :type="type || 'button'" :disabled="disable || false">{{ title }}</button>
</template>
<script setup lang="ts">
  interface IProps {
    title: string,
    disable?: boolean
    type?: string
  }
  const props = defineProps<IProps>()
</script>
<style lang="sass" scoped>
  .c-button
    width: 100%
    padding: 20px
    border-radius: 5px
    border: 0px
    color: #eeeeee
    background: #ea4c88
    cursor: pointer
    transition: 0.5s all
    &:hover
      background: #ea518c
      transition: 0.5s all
    &:disabled
      background: #5d5d5d
      cursor: not-allowed
</style>