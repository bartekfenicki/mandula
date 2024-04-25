<template>
   <div class="sm:grid lg:grid-cols-3 sm:grid-cols-2">
      <div class="w-full flex justify-center my-5 mx-auto" v-for="product in products" :key="product.id">
        <productCard :product="product"/>
      </div>

  </div>
    </template>
<script setup>
const { data: products } = await useFetch('/api/data');

console.log(products)

definePageMeta({
            layout: 'products'
        })
</script>
    
<style scoped>
    
</style>