<template>
  <div v-if="product">
    <div class="card  text-center">
    <!-- TRY TO MAKE IT ASYNC -->
      <img class="thumb" :src="product.images[0].src" alt="Product Image">
      <p class="my-2">{{ product.name }}</p>
      <p class="my-2">{{ product.price }} HUF</p> 
      <NuxtLink :to="`/products/${product.id}`"><div class="btn my-4">Select</div></NuxtLink>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>   
  </div>
</template>

<script  setup>
const {product} = defineProps(['product'])
</script>

<style scoped>
.thumb {
  max-height: 160px;
  max-width: 90%;
  margin: 0 auto;
}
p {
  color: #F0B9AC;
}
</style>