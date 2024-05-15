<template>
  <div class="wrapper">
 <div class="intro-wrapper">
  <div class="container">
    <h1>About us</h1>
    <h3>A dream come true... The story of Mandula <br> cake and cake workshop is truly a fairy tale.</h3>
  </div>
 </div>
 <div class="content-wrapper">
 <div class="flower">
 <img src="../../assets/images/mandula_flower.png" alt="flower">
</div>
<div class="roots">
  <h2>Our Roots</h2>
</div>
<div class="content-container">
<div class="text-container">
  <div class="image">
    <img src="../../assets/images/About1.png" alt="About">
  </div>
  <div class="text">
    <p>Even when I was a small child, I definitely knew what I wanted to do. Next to my father, perched on the kitchen counter, I announced that I was going to be a confectioner.</p>
    <p>Since completing my profession, I have been continuously improving my knowledge and the time has come to dazzle my customers with it.  </p>
  </div>
</div>
<div class="text-container-reverse">
  <div class="text-reverse">
    <p>My dream came true in 2019, when I opened my own cake workshop. I am proud to say that I have been able to make many people happy with my cakes since then.</p>
    <p>My goal is to make the most beautiful and most delicious cakes for my customers, and to make their special moments even more special.</p>
  </div>
  <div class="image-reverse">
    <img src="../../assets/images/About2.png" alt="Aboutimg">
  </div>
</div>
</div>
</div>
</div>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

const {data: aboutImages} = await useFetch('https://hanacoric.com/wp-json/wp/v2/about_image');


definePageMeta({
            layout: 'about'
        })


</script>

<style scoped>


.wrapper {
  width:fit-content;
  height:max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.intro-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('../../assets/images/Mandula_tortamuhely.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: #FEFAF9;
  font-size: 5rem;
  height: 10%;
}

h3 {
  color: #FEFAF9;
  font-size: 2rem;
}

.content-wrapper {
  width: 100vw;
  height:180vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.flower {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.roots {
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  color: #A64817;
  font-size: 3rem;
}

.content-container {
  width: 100vw;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.text-container {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.text {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap:1rem;
}

.text p {
  color: #191514;
  font-size: 1.7rem;
}

.image {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container-reverse {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.text-reverse {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap:1rem;
}

.text-reverse p {
  color: #191514;
  font-size: 1.7rem;
}

.image-reverse {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}





</style>