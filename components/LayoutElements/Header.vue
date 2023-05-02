<template>
  <header class="c-header">
    <nav class="c-header__navigation">
      <ul class="c-header__list">
        <li class="c-header__item">
          <nuxt-link to="/" class="c-header__link">Log in</nuxt-link>
        </li>
        <li class="c-header__item">
          <nuxt-link to="/UserDetails" class="c-header__link">User details</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import SignIn from "/components/Forms/SignIn.vue"
    
</script>
<style scoped lang="sass">
  .c-header 
    &__list
      display: flex
      column-gap: 15px
      list-style-type: none
      color: #eeeeee
    &__link
      color: #eeeeee
      text-transform: uppercase
</style>
