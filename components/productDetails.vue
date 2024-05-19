<template>
 <div v-if="product" class="w-full h-[120vh]">
  <h1 class="h2-pink mb-10 ml-[160px]">{{ product.name }}</h1>
  <div >
    <div class="flex justify-around ">
        <div class="max-w-2xl flex justify-start items-center flex-col">
            <img :src="product.images[0].src" alt="Product Image" class="w-[488px] h-[488px] rounded-lg border-2" style="border-color: #F0B9AC;">
            <div class="text-left flex justify-center items-center flex-col">
                <h2 class="w-[75%] h3-pink flex justify-start ">Product description:</h2>
                <div v-html="product.description" class=" description-wrapper"></div>
                <div v-html="product.short_description" class="w-[75%] description-wrapper m-0"></div>
            </div>
        </div>
        <div class="w-full flex flex-col p-8 rounded-lg border-2 max-w-2xl fill-white" style="border-color: #F0B9AC;">
    <div>
    <div class="flex items-center justify-between ">
      <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="radio" name="check" @change="ToggleMenu(1)"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" /> 
    <label for="default-checkbox" class="p-product mt-0 ml-5">8 Slices</label> </label>
        <p class="flex items-left p-product mt-0">{{ product.price }}</p>
    </div>

    <div class="ml-[40px] flex flex-col justify-center items-start" v-if="showMenu">
    <div class="flex flex-col justify-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="checkbox"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Traditional</label> </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="checkbox"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Gluten-free</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="checkbox"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Vegan</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
    </div>
    <div class="">
        
        <div class="p-product-black">
            <div class="p-product-black">INGREDIENTS:</div>
            <a href="#" class="underline">flour</a> -
            <a href="#" class="underline">egg</a> -
            sugar - <a href="#" class="underline">almond flour</a> -
            margarine - sugar - apple - cinnamon - white chocolate - baking powder -
            <a href="#" class="underline">cream</a>
        </div>
    </div>
</div>

  </div>
  <div class="flex items-center justify-between ">
      <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="radio" name="check"  @change="ToggleMenu(2)"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink"  /> 
    <label for="default-checkbox" class="p-product mt-0 ml-5">14 Slices</label> </label>
        <p class="flex items-left p-product mt-0">{{ product.price }}</p>
    </div>

    <div class="ml-[40px] flex flex-col justify-center items-start" v-if="showMenuTwo">
    <div class="flex flex-col justify-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="checkbox"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Traditional</label> </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="checkbox"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Gluten-free</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="checkbox"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Vegan</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
    </div>
    <div class="">
        
        <div class="p-product-black">
            <div class="p-product-black">INGREDIENTS:</div>
            <a href="#" class="underline">flour</a> -
            <a href="#" class="underline">egg</a> -
            sugar - <a href="#" class="underline">almond flour</a> -
            margarine - sugar - apple - cinnamon - white chocolate - baking powder -
            <a href="#" class="underline">cream</a>
        </div>
    </div>
</div>

    <div class="flex items-center justify-between ">
      <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="radio" name="check"  @change="ToggleMenu(3)"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink"  /> 
    <label for="default-checkbox" class="p-product mt-0 ml-5">20 Slices</label> </label>
        <p class="flex items-left p-product mt-0">{{ product.price }}</p>
    </div>
    <div class="ml-[40px] flex flex-col justify-center items-start" v-if="showMenuThree">
    <div class="flex flex-col justify-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="checkbox"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Traditional</label> </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="checkbox"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Gluten-free</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
      <input type="checkbox"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Vegan</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
    </div>
    <div class="">
        
        <div class="p-product-black">
            <div class="p-product-black">INGREDIENTS:</div>
            <a href="#" class="underline">flour</a> -
            <a href="#" class="underline">egg</a> -
            sugar - <a href="#" class="underline">almond flour</a> -
            margarine - sugar - apple - cinnamon - white chocolate - baking powder -
            <a href="#" class="underline">cream</a>
        </div>
    </div>
</div>

    <div class="flex justify-between items-center">
        <p class="p-product-black">Box:</p>
        <p class="p-product-black">+ 500 HUF</p>
    </div>
    <div class="flex justify-between items-center ">
        <p class="p-product-black ">Sub-total:</p>
        <p class="p-product-black font-bold">8,250 HUF</p>
    </div>
    <div class="flex justify-center">
    <button class=" w-[200px] h-[50px] p-product-black text-lg font-bold py-2 rounded-lg" style="background-color: #F0B9AC;">
        Add to cart
    </button>
</div>
</div>
    </div>
</div>
</div>
  <div v-else>
    <p>Loading...</p>
  </div>
  
</template>

<script setup>

const {product} = defineProps(['product'])
console.log(product.attributes)

const showMenu = ref(false)
const showMenuTwo = ref(false)
const showMenuThree = ref(false)

const ToggleMenu = (id) => {
    if (id === 1) {
        showMenuTwo.value = false
        showMenuThree.value = false
        showMenu.value = !showMenu.value
    }else if (id === 2) {
        showMenu.value = false
        showMenuThree.value = false
        showMenuTwo.value = !showMenuTwo.value}
        else if (id === 3) {
        showMenu.value = false
        showMenuTwo.value = false
        showMenuThree.value = !showMenuThree.value}
        
}

</script>

<style >
/*The dinamically added data using v-html caused 
the description p tag to be unreachable by tailwind so we have to use some basic css to reach it*/
.description-wrapper p {
    color: hsl(12, 11%, 9%);
    font-size: 1.5rem;
}

</style>