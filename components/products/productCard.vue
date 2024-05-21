<template>
  <div v-if="product">
    <div class="card  text-center">
    <!-- TRY TO MAKE IT ASYNC -->
      <img class="thumb" :src="product.images[0].src" alt="Product Image">
      <div class="flex flex-col  w-32 mx-5 mt-2 justify-around items-center">
      <span class=" text-black">{{ product.name }}</span>
      <span class="">{{ product.price }} HUF</span> 
    </div>
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