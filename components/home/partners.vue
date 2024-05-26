<template>
  <div class="partners-container overflow-x-auto" @mouseover="stopAnimation" @mouseleave="resumeAnimation">
    <div class="partners-wrapper">
      <div v-for="partner in partners" :key="partner.id" class="partner-item">
        <img class="partner-image" :src="partner.acf.image.link" alt="Partner Image">
      </div>
      <div v-for="partner in partners" :key="partner.id" class="partner-item">
        <img class="partner-image" :src="partner.acf.image.link" alt="Partner Image">
      </div>
    </div>
  </div>
  
  
</template>

<script setup>
const {data: partners} = await useFetch('https://hanacoric.com/wp-json/wp/v2/partner');


let animationPaused = false;

function stopAnimation() {
  animationPaused = true;
}

function resumeAnimation() {
  animationPaused = false;
}
</script>



<style scoped>
.partners-container {
  width: 1000px;
  overflow-x: auto;
  background-color: #b59a9422;
  white-space: nowrap;
}

.partners-wrapper {
  display: flex;
  justify-content: flex-start;
  gap: 45px;
  padding: 5px;
  animation: scrollLeftRight 10s linear infinite;
}

.partner-item {
  margin-left: 20px;
  margin-right: 20px;
  min-width: 150px;
  height: 100px; /* Set height as needed */
  border: 2px solid black;
  border-radius: 8px;
  overflow: hidden; /* Hide overflow if partner image is larger */
}

.partner-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio */
}

@keyframes scrollLeftRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-141% )); /* Adjust with padding-right */
  }
  0% {
    transform: translateX(0);
  }
}
@media screen and (max-width: 1000px) {
  .partners-container {
    width: 768px;  
  }
  .partners-wrapper {
    animation: scrollLeftRightPad 10s linear infinite; /* Animation for smaller screens */
  }
}
@media screen and (max-width: 768px) {
  .partners-container {
    width: 500px;  
  }
  .partners-wrapper {
    animation: scrollLeftRightPad 10s linear infinite; /* Animation for smaller screens */
  }
  .partner-item {
  margin-left: 0px;
  margin-right: 0px;
  min-width: 150px;
}
}
@media screen and (max-width: 500px) {
  .partners-container {
    width: 100%;  
  }
  .partners-wrapper {
    animation:  none; /* Animation for smaller screens */
  }
  .partner-item {
  margin-left: 0px;
  margin-right: 0px;
  min-width: 150px;
}
}
@keyframes scrollLeftRightPad {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-184%)); 
  }
}

.partners-container:hover .partners-wrapper {
  animation-play-state: paused;
}
</style>
