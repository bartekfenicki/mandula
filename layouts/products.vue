<template>
  <div class="z-50 fixed w-full">
    <Navbar/>
  </div>
  
    <div class="mx-auto p-4 z-0">
      <slot />
    </div>
  <bottomNav/>
</template>

<script setup>



</script>

<style scoped>
.title {
font-size: 25px;
color: rgb(209, 165, 172);
margin: 20px;
}
</style>