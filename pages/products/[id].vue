<template>
  <div>
    <ProductDetails :product="product" :variations="variations"/>
  </div>
  


</template>

 <script setup>



const route = useRoute();

const { data: product } = useFetch(`/api/dataID/${route.params.id}`  );

const { data: variations} = await useFetch(`/api/variations/${route.params.id}`);
definePageMeta({
  layout: 'products'
});
</script> 


    
<style scoped>

    
</style>