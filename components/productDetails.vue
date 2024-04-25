<template>
  <div class="grid grid-cols-2 gap-10">
    <div class="m-7">
      <p> Product details for {{ id }} </p>
      <!-- <img class="mx-auto my-7" :src="product.images[0].src" alt="Product Image"> -->
    </div>
    <div class="m-7">
        <!-- <h3>{{ product.name }}</h3>
        <h4>{{ product.price }}</h4> -->
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const {product} = defineProps(['product'])
</script>

<style>

</style>