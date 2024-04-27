<template>
  <div class="fixed w-full">
    <Navbar/>
  </div>
  <div class="container-fluid">
    <HeroImg/>
  </div> 
  <div class="container-fluid mx-auto">
    <slot />
  </div>
  <BottomNav/>
</template>

<script lang="ts" setup>
import BottomNav from '~/components/bottomNav.vue';


</script>

<style>

</style>