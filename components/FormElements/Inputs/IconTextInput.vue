<template>
  <div class="c-iconTextInput">
    <img
      class="c-iconTextInput__icon"
      :src="`/Content/Icons/SignInForm/${icon}.svg`"
    />
    <input
      :value="modelValue"
      @input="changeModelValue"
      class="c-iconTextInput__field"
      :placeholder="placeholder"
      :type="type || 'text'"
    />
    <transition>
      <span v-if="errorMessage" class="c-iconTextInput__errorMessage">{{
        errorMessage
      }}</span>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from "vue";
import type { HTMLElementEvent } from "@/types/event";
interface IProps {
  modelValue: string;
  icon: string;
  placeholder: string;
  type?: string;
  errorMessage?: string;
}
const props = defineProps<IProps>();

const emit = defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();
function changeModelValue(event: HTMLElementEvent<HTMLInputElement>): void {
  emit("update:modelValue", event.target.value);
}
</script>
<style lang="sass" scoped>
.c-iconTextInput
  display: flex
  align-items: center
  width: 100%
  height: 50px
  // overflow: hidden
  border-radius: 5px
  background: $input-backgroud-dark
  position: relative
  &__icon
    width: 17px
    height: 100%
    padding: 0 15px
    filter: invert(31%) sepia(98%) saturate(6%) hue-rotate(237deg) brightness(98%) contrast(85%)
  &__field
    height: 100%
    width: 100%
    padding: 0 10px
    border: 0
    color: $text-base-light
    background: $input-backgroud-base
    outline: none
    box-sizing: border-box
    transition: 0.5s all
    &:focus
      background: $input-backgroud-light
      transition: 0.5s all
  &__errorMessage
    color: $error
    font-size: 13px
    position: absolute
    top: 100%
</style>
