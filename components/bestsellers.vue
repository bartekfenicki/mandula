<template>
  <div class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-5">
     <div class="my-10" v-for="bestseller in bestsellers">
      <div class="card text-center">
        <img :src="bestseller.acf.image.url" alt="image" class="thumb">
        <h2 class="my-2"> {{ bestseller.title.rendered }}</h2>
        <p class="">{{ bestseller.acf.price }} HUF</p>
      </div>
    </div> 
  </div>
</template>

<script setup>
const {data: bestsellers} = await useFetch('https://hanacoric.com/wp-json/wp/v2/bestseller');

console.log(bestsellers)
</script>

<style scoped>
 .thumb {
  max-height: 140px;
  max-width: 70%;
  margin: 0 auto;
}
</style>