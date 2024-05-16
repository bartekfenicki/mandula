<template>
  <div class="fixed w-full z-40">
    <Navbar/>
  </div>
  <div class="container-fluid">
    <HeroImg/>
    <button @click="scrollToSection" class="scroll-button animate-bounce -mt-16 flex flex-col items-center mx-auto">
      <p class="text-[#FDF1EE]">See More</p>
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