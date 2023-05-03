<template>
  <form class="c-form">
    <IconTextInput
      v-model="v$.email.$model"
      :error-message="checkValidateError(v$.email)"
      placeholder="Username"
      icon="Login"
    />
    <IconTextInput
      v-model="v$.password.$model"
      :error-message="checkValidateError(v$.password)"
      placeholder="Password"
      icon="Password"
      type="password"
    />
    <AppButton
      @click="signIn"
      :disable="hasValidateErrors(v$)"
      title="SIGN IN"
    />
    <span class="c-form__text"
      >Not a member?
      <nuxt-link to="#" class="c-form__link">Sign up now</nuxt-link></span
    >
  </form>
</template>
<script setup lang="ts">
import IconTextInput from "@/components/FormElements/Inputs/IconTextInput.vue";
import AppButton from "@/components/FormElements/Buttons/AppButton.vue";
import DataUserPopup from "@/components/PopUps/DataUserPopup.vue";

import { reactive } from "vue";
import { VueFinalModal, useVfm, useModal } from "vue-final-modal";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import {
  checkValidateError,
  hasValidateErrors,
} from "~/assets/Mixins/VueValidateErrors";
import { openPopup } from "~/assets/Mixins/PopupControl";
import { useStore } from "vuex";

interface ILogin {
  email: string;
  password: string;
}
const authData: ILogin = reactive({
  email: "",
  password: "",
});
const authRules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
};
const v$ = useVuelidate(authRules, authData);

const signInModal = useModal({
  component: DataUserPopup,
  attrs: {
    onConfirm() {
      this.close();
    },
  },
});

const store = useStore();
const tokenCookie = useCookie("token");

async function signIn() {
  if (!hasValidateErrors(v$)) {
    await store.dispatch("users/loginUser", authData);
    tokenCookie.value = store.getters["users/getTokenAuth"];
    openPopup(signInModal);
  }
}
</script>
<style lang="sass" scoped>
.c-form
  display: flex
  flex-direction: column
  row-gap: 15px
  width: 280px
  &__text
    color: $text-base-dark
  &__link
    color: $text-base-light
</style>
