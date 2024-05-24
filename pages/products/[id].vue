<template>
  <div class="mt-20">
    <ProductsProductDetails :product="product" :variations="variation" />
  </div>
</template>

 <script setup>



const route = useRoute();

const { data: product } = useFetch(`/api/dataID/${route.params.id}`);

const { data: variation } = useFetch(`/api/variations/${route.params.id}/variations`  );

console.log(product)



definePageMeta({
  layout: 'products'
});
</script> 


    
<style scoped>
    
</style>