<template>
 <div v-if="product">
    <img :src="product.images[0].src" alt="Product Image"> 
    <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <div v-html="product.description"></div>
    <div v-html="product.short_description"></div> 
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
  
</template>

<script setup>
const {product} = defineProps(['product'])




</script>

<style>

</style>