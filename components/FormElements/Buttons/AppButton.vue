<template>
  <button
    class="c-button"
    :type="type || 'button'"
    :disabled="disable || false"
  >
    {{ title }}
  </button>
</template>
<script setup lang="ts">
interface IProps {
  title: string;
  disable?: boolean;
  type?: string;
}
const props = defineProps<IProps>();
</script>
<style lang="sass" scoped>
.c-button
  width: 100%
  padding: 20px
  border-radius: 5px
  border: 0px
  color: $text-base-light
  background: $pink-base
  cursor: pointer
  transition: 0.5s all
  &:hover
    background: $pink-light
    transition: 0.5s all
  &:disabled
    background: $disabled
    cursor: not-allowed
</style>
