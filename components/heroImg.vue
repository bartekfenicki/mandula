<template>  
  <div class="container-fluid relative">
      <div v-for="(heroImage, index) in heroImages" :key="index" :class="['mySlides', { active: index === slideIndex }]" class="duration-1000 ease-in-out fade">
        <img :src="heroImage.acf.hero_image.link" alt="hero-image" class="w-full duration-1000 ease-in-out">
      </div>
    <div class="absolute left-1/4 top-1/2 md:top-2/3 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
      <h1 class="text-white md:text-[#FDF1EE] text-xl md:text-4xl lg:text-6xl font-bold mb-4 shadow-lg md:shadow-sm">
        Contact for <br> Custom Orders
      </h1>
      <NuxtLink class="" to="/contact"> 
        <button class="rounded-lg border-2 border-[#FDF1EE] px-5 py-2 ms-2 md:ms-0 md:px-10 md:py-5 text-[#FDF1EE] font-['New_Spirit']">Contact</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: heroImages } = await useFetch('https://hanacoric.com/wp-json/wp/v2/hero-image');

const slideIndex = ref(0);

const nextSlide = () => {
  slideIndex.value++;
  if (slideIndex.value >= heroImages.value.length) {
    slideIndex.value = 0;
  }
  setTimeout(nextSlide, 5000);
};

onMounted(() => {
  setTimeout(nextSlide, 5000);
});
</script>

<style>
.mySlides {
  display: none;
}
.mySlides.active {
  display: block;
}

</style>


