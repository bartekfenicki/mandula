<template>
  <div class="mt-20">
    <ProductDetails :product="product" :variations="variation" />
  </div>
</template>

 <script setup>



const route = useRoute();

const { data: product } = useFetch(`/api/dataID/${route.params.id}`);

 const { data: variation } = useFetch(`/api/variations/${route.params.id}` );

console.log(product)



definePageMeta({
  layout: 'products'
});
</script> 


    
<style scoped>
    
</style>