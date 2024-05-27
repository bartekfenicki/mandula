<template>
  <div class="fixed w-full top-0 z-40">
    <Navbar/>
  </div>
  <div class="container-fluid mt-20 sm:mt-0 z-0">
    <HeroImg/>
    <button @click="scrollToSection" class="scroll-button animate-bounce -mt-16 hidden md:flex flex-col items-center mx-auto">
      <span  class="text-[#FDF1EE] font-['New_Spirit']">See More</span>
    <img class="h-10 w-10" src="/assets/icons/down-white.png" alt="down">
    </button>
  </div> 
  <div id="content" class="container-fluid pt-16 mx-auto">
    <slot />
  </div>
  <BottomNav/>
</template>

<script  setup>
const scrollToSection = () => {
  const section = document.getElementById('content'); 

  // Scroll to the section smoothly
  section.scrollIntoView({
    behavior: 'smooth'
    
  });
}


</script>

<style>

</style>