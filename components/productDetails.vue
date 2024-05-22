<template>
 <div v-if="product" class="w-full h-max">
    <div class="w-full flex flex-row lg:justify-start justify-center" ><h1 class="lg:h2-pink mb-10 lg:ml-[160px] h2-brown ">{{ product.name }}</h1></div>
  
  <div >
    <div class="flex justify-around ">
        <div class="max-w-2xl flex justify-start items-center flex-col">
            <img :src="product.images[0].src" alt="Product Image" class="lg:w-[488px] lg:h-[488px] sm:w-[188px] sm:h-[188px] rounded-lg border-2 " style="border-color: #F0B9AC;">
            <div class="text-left flex justify-center items-center flex-col">
                <h2 class="lg:w-[75%] lg:h3-pink lg:flex lg:justify-start hidden ">Product description:</h2>
                <div v-html="product.short_description" class="w-[75%] short-description-wrapper m-0 lg:block hidden "></div>
            </div>
        </div>
        <div class="w-full flex flex-col p-8 rounded-lg border-2 max-w-2xl fill-white lg:block hidden" style="border-color: #F0B9AC;">
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
      <input type="radio" name="variations"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Traditional</label> </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
        <input type="radio" name="variations"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Gluten-free</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
        <input type="radio" name="variations"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Vegan</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
    </div>
    <div class="">
        
        <div class="p-product-black">
            <div class="p-product-black">INGREDIENTS:</div>
            <div v-html="product.description" class="ingredients"></div>
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
        <p class="flex items-left p-product mt-0"></p>
    </div>

    <div class="ml-[40px] flex flex-col justify-center items-start" v-if="showMenuTwo">
    <div class="flex flex-col justify-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
        <input type="radio" name="variations"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Traditional</label> </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
        <input type="radio" name="variations"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Gluten-free</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
    <input type="radio" name="variations"
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
    <input type="radio" name="variations"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Traditional</label> </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
    <input type="radio" name="variations"
        class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
        id="fill-pink" checked /> 
    <label for="default-checkbox" class="p-product-black mt-0 ml-5">Gluten-free</label> </label>
            <p class=" p-product-black mt-0">+1000 HUF</p>
        </label>
        <label class=" flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="fill-pink">
    <input type="radio" name="variations"
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

    <div class="flex justify-between items-center mt-10">
        <div class="flex flex-row items-center">
        <input type="checkbox" class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10">
        <p class="p-product-black mt-0 ml-6">Box:</p>
    </div>
        <p class="p-product-black m-0">+ 500 HUF</p>
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



<!--mobile version-->
<div class="w-full h-fit flex flex-col justify-center items-center lg:hidden" >
<div class="w-full flex flex-col justify-center items-center">
<div class="w-full flex justify-start mt-10">
    <p class=" w-fit h-[50px] h2-brown lg:hidden flex m-0">Slices:</p>
</div>
<div class="w-fit flex flex-row justify-center space-x-4 items-center">
    <button class="btn-product hover-pink">8</button>
    <button class="btn-product hover-pink">14</button>
    <button class="btn-product hover-pink">20</button>
</div>
<div class="w-fit flex flex-col justify-center items-center">
 <div class="w-full flex justify-start mt-10">
    <p class=" h-[50px] h2-brown lg:hidden flex m-0 ">Style:</p>
</div>
<div class="w-fit flex flex-row justify-center space-x-4 items-center">
    <button class="btn-product hover-pink">Traditional</button>
    <button class="btn-product hover-pink">Gluten-free</button>
    <button class="btn-product hover-pink">Vegan</button>
</div>
</div>
</div>
<div class=" w-full flex flex-col justify-between mt-10">
    <div class="flex flex-row justify-evenly space-x-20">
        <div class="flex flex-row">
            <input type="checkbox" class="focus:ring-0 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border  checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10">
        <p class="text-[#191514] font-['New_Spirit'] text-xl mt-0 ml-3">Box:</p>
        </div>
        <p class="text-[#191514] font-['New_Spirit'] text-xl m-0 flex flex-row ">+ 500 HUF</p>
    </div>
    <div class="flex flex-row justify-evenly space-x-20 mt-5">
        <p class="text-[#191514] font-['New_Spirit'] text-xl mt-0 ml-3 font-bold">Sub-total:</p>
        <p class="text-[#191514] font-['New_Spirit'] text-xl m-0 flex flex-row ">8 250 HUF</p>
    </div>
</div>
    <div class="flex justify-center">
    <button class=" w-[200px] h-[50px] p-product-black text-lg font-bold py-2 rounded-lg" style="background-color: #F0B9AC;">
        Add to cart
    </button>
</div>

<div class="w-full flex flex-col justify-between mt-5">
    <div class="w-full flex justify-center mt-10">
    <p class=" w-fit h-[50px] h2-brown lg:hidden flex m-0">Ingredients:</p>
</div>
<div class="w-fit flex flex-row justify-center space-x-4 items-center">
    <p class="text-lg m-0 p-product-black">
                <a href="#" class="underline">flour</a> - 
                <a href="#" class="underline ">egg</a> - 
                sugar - 
                <a href="#" class="underline ">almond flour</a> - 
                margarine - sugar - apple - cinnamon - white chocolate - baking powder - 
                <a href="#" class="underline text-brown-600 hover:text-brown-800">cream</a>
            </p>
</div>
<div class="w-full flex justify-center mt-10">
    <p class=" w-fit h-[50px] h2-brown lg:hidden flex m-0">Product Description:</p>
</div>
    <div v-html="product.short_description" class="description-wrapper-mobile w-[75%]  m-0 lg:hidden"></div>
</div>
</div>
</div>

  <div v-else>
    <p>Loading...</p>
  </div>



  
</template>

<script setup>

const {product} = defineProps(['product'])
console.log(product)



const showMenu = ref(true)
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
.short-description-wrapper p {
    color: hsl(12, 11%, 9%);
    font-size: 1.5rem;
}

.description-wrapper-mobile p{
    color: hsl(12, 11%, 9%);
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    width: 95vw;
}

.ingredients p{
    color: hsl(12, 11%, 9%);
    font-size: 1rem;
    margin-top: 0;
    font-weight: bold;
}

</style>