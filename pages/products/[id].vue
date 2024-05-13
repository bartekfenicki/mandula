<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

 <script setup>



const route = useRoute();

const { data: product } = useFetch(`/api/dataID/${route.params.id}`  );

console.log(product)

definePageMeta({
  layout: 'products'
});
</script> 


    
<style scoped>
    
</style>