<template>
    
    <div>
   <productDetails :product="product"/>

  </div>

</template>

<script setup>

    const { id } = useRoute().params;
    const { data: product } = await useFetch(`/api/dataID`);

    definePageMeta({
      layout: 'products'
    });

</script>


    
<style scoped>
    
</style>