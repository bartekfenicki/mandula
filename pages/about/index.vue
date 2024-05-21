<template>
 <h1> about </h1>
 

<!-- <div id="default-carousel" class="relative w-full" data-carousel="slide">
   Carousel wrapper  
    <div class="overflow-hidden rounded-lg h-96">
        <div class="hidden duration-1000 ease-in-out" data-carousel-item v-for="heroImage in heroImages">
          <img :src="heroImage.acf.hero_image.link" alt="image" class="block  w-full">
        </div>
    </div>
    Slider controls 
    <button type="button" class="absolute top-0  z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 ">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> -->


 
    



</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

const {data: heroImages} = await useFetch('https://hanacoric.com/wp-json/wp/v2/hero-image');
console.log(heroImages)

definePageMeta({
            layout: 'about'
        })
</script>

<style scoped>
.hero-img-cake {
  height: 300px;
  width: auto;
}
ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
ul li {
  margin: 20px;
}
</style>