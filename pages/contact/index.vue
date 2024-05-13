<template>
  <div class="flex justify-around flex-wrap">
    <div class="flex justify-center flex-col">
      <ul>
        <li class="gap-5 flex items-center flex-col sm:flex-row">
          <h2>Phone:</h2>
          <h3> +48 454 545 475</h3>
        </li>
        <li class="gap-5 my-10 flex items-center flex-col sm:flex-row">
          <h2>Email:</h2>
          <h3> kian.cockeater@gmail.com</h3>
        </li>
        <li class="gap-5 my-5 flex flex-col sm:flex-row">
          <h2>Social Media:</h2>
          <Socials/>
        </li>
        <li class="gap-5 my-10 flex items-center flex-col sm:flex-row">
          <h2>Adress:</h2>
          <h3> Budapest, Mezőtárkány u. 4, 1173 Hungary </h3>
        </li>
      </ul>
    </div>
    <img class="w-96 h-96 rounded-md" src="/assets/images/cakepop.jpg" alt="">
  </div>
</template>

<script setup>
definePageMeta({
            layout: 'contact'
        })
</script>

<style scoped>

</style>