<template>
  <div class="card text-center">
    <img class="thumb" :src="product.images[0].src" alt="Product Image">
    <h4 class="my-2">{{ product.name }}</h4>
    <h4 class="my-2">{{ product.price }} HUF</h4>
    <NuxtLink :to="`/products/${product.id}`"><div class="btn my-4">Select</div></NuxtLink>
  </div>
</template>

<script  setup>
const {product} = defineProps(['product'])
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>