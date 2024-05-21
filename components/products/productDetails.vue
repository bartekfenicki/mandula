<template>
 <div v-if="product">
    <img :src="product.images[0].src" alt="Product Image"> 
    <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <div v-html="product.description"></div>
    <div v-html="product.short_description"></div> 
    <button class="btn" @click="addToCart(product)"> Add to Cart </button>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
  
</template>

<script setup>
const {product} = defineProps(['product'])

const cartItems = ref([]);

const addToCart = (product) => {
  cartItems.value.push(product);
};
console.log(cartItems)
</script>

<style>

</style>