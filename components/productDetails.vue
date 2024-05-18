<template>
 <div v-if="product" class="w-full h-[120vh]">
  <h1 class="h2-pink mb-6">{{ product.name }}</h1>
    <div class="flex justify-evenly ">
        <div>
            <img :src="product.images[0].src" alt="Product Image" class="w-[488px] h-[488px] rounded-lg border-2" style="border-color: #F0B9AC;">
            <div class="text-left mt-8">
                <h2 class="h3-pink">Product description:</h2>
               <!-- <div v-html="product.description" class="p-black mt-4"></div>
                <div v-html="product.short_description" class="mt-4"></div>-->
            </div>
        </div>
        <div class="p-8 rounded-lg border-2 max-w-2xl" style="border-color: #F0B9AC;">
    <div class="flex items-center justify-evenly">
        <p class=" p-product">8 Slices</p>
        <p class="ml-auto p-product">8,250 HUF</p>
    </div>
    <div class="">
        <label class="inline-flex items-center">
            <p class="p-product-black">Traditional</p>
        </label>
        <label class="inline-flex items-center ">
            <p class="p-product-black">Gluten-free +1000 HUF</p>
        </label>
        <label class="inline-flex items-center ">
            <p class="p-product-black">Vegan +1000 HUF</p>
        </label>
    </div>
    <div class="">
        <span class="p-product-black">INGREDIENTS:</span>
        <div class="p-product-black">
            <a href="#" class="underline">flour</a> -
            <a href="#" class="underline">egg</a> -
            sugar - <a href="#" class="underline">almond flour</a> -
            margarine - sugar - apple - cinnamon - white chocolate - baking powder -
            <a href="#" class="underline">cream</a>
        </div>
    </div>
    <div class="flex items-center ">
        <p class=" p-product">14 Slices</p>
        <p class="ml-auto p-product">13,300 HUF</p>
    </div>
    <div class="flex items-center">
        <p class=" p-product">20 Slices</p>
        <p class="ml-auto p-product">18,500 HUF</p>
    </div>
    <div class="flex justify-between items-center">
        <p class="p-product-black">Box:</p>
        <p class="p-product-black">+ 500 HUF</p>
    </div>
    <div class="flex justify-between items-center ">
        <p class="p-product-black">Sub-total:</p>
        <p class="p-product-black">8,250 HUF</p>
    </div>
    <button class=" w-[200px] p-product-black text-lg font-bold py-2 rounded-lg" style="background-color: #F0B9AC;">
        Add to cart
    </button>
</div>
    </div>
</div>
  <div v-else>
    <p>Loading...</p>
  </div>
  
</template>

<script setup>
const {product} = defineProps(['product'])

</script>

<style scoped>

</style>