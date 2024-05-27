<template>
  <div class="w-full z-40 fixed top-0">
    <Navbar/>
  </div>

  <div class="container-fluid mx-auto mt-20 sm:mt-0 z-0">
    <slot />
  </div>
  <BottomNav/>
</template>

<script lang="ts" setup>

</script>

<style>

</style>