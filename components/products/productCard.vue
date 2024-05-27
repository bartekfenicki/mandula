<template>
  <div v-if="product">
    <div class="card  text-center">
      <img class="thumb" :src="product.images[0].src" alt="Product Image">
      <div class="flex flex-col  w-32 mx-auto mt-2 justify-center items-center">
      <span class="text-md font-['Comfortaa'] text-black">{{ product.name }}</span>
      <span class="text-md font-['Comfortaa'] text-black">{{ product.price }} HUF</span> 
    </div>
      <NuxtLink :to="`/products/${product.id}`"><div class="btn my-4 mx-2 md:mx-auto">Select</div></NuxtLink>
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
  max-height: 190px;
  max-width: 90%;
  margin: 0 auto;
  border-radius: 6px;
}
@media screen and (max-width:768px){
.thumb {
  margin-left: 10px;
  max-height: 100px;
}
}
p {
  color: #F0B9AC;
}
</style>