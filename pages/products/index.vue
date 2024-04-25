<template>
   <div class="flex flex-row">
      <div class="w-screen flex" v-for="product in products" :key="product.id">
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