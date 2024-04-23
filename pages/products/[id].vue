<template>
<div>
      <div v-for="SingleProduct in SingleProducts"  class="product">
      <!-- <h2>{{ SingleProduct._rawValue.name }}</h2> -->
    </div>  
  </div>
</template>

 <script setup>

const route = useRoute();

const { data: SingleProducts } = useFetch(`/api/dataID/${route.params.id}`  );

console.log(SingleProducts)

definePageMeta({
  layout: 'products'
});
</script> 

    
<style scoped>
    
</style>