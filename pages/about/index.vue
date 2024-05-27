<template>
  <div
    class="max-w-[100vw] lg:h-full sm:h-full md:h-[130vh] flex flex-col justify-between items-center"
  >
    <div
      class="w-screen flex justify-center items-center flex-col bg-no-repeat bg-cover"
    >
      <div class="w-full-container-fluid" v-for="about in aboutImage">
        <img :src="about.acf.about_image.url" alt="image" class="w-full" />
      </div>
      <div
        class="absolute left-1/2 md:left-1/4 transform -translate-x-1/2 md:-translate-x-0 w-3/4 md:w-1/2 flex flex-col items-center text-center"
      >
        <h1 class="h1-white">About us</h1>
        <p class="p-white lg:mt-[40px] mt-0">
          A dream come true... The story of Mandula <br />
          cake and cake workshop is truly a fairy tale.
        </p>
      </div>
    </div>
    <div
      class="w-screen h-[10vh] sm:h-[10vh] flex flex-col justify-evenly items-center"
    >
      <div
        class="md:w-full md:h-[20px] md:mb-8 lg:w-full lg:h-[30px] flex justify-center items-center lg:mb-[250px]"
      >
        <img
          class="flower-shadow w-[100px] h-[70px] md:w-[150px] md:h-[120px] lg:w-[300px] lg:h-[230px]"
          src="../../assets/images/mandula_flower.png"
          alt="flower"
        />
      </div>
    </div>

    <div class="h-[10vh] sm:h-[30vh] flex justify-center items-center">
      <h2 class="h2-brown">Our Roots</h2>
    </div>
    <div
      class="w-screen h-auto md:h-[140vh] flex flex-col justify-evenly items-center"
    >
      <div
        class="w-4/5 h-full flex flex-col md:flex-row-reverse justify-evenly items-center"
      >
        <div
          class="w-full md:w-[45%] flex flex-col justify-evenly items-center gap-4 mb-10 md:mb-0"
        >
          <p class="p-black">
            Even when I was a small child, I definitely knew what I wanted to
            do. Next to my father, perched on the kitchen counter, I announced
            that I was going to be a confectioner.
          </p>
          <p class="p-black">
            Since completing my profession, I have been continuously improving
            my knowledge and the time has come to dazzle my customers with it.
          </p>
        </div>
        <div class="w-full md:w-2/5 flex justify-center items-center">
          <img
            class="w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[450px] lg:h-[450px]"
            src="../../assets/images/About1.png"
            alt="About"
          />
        </div>
      </div>
      <div
        class="w-4/5 h-auto md:h-full flex flex-col md:flex-row justify-evenly items-center mt-10 md:mt-0 md:mb-10"
      >
        <div
          class="w-full md:w-[45%] flex flex-col justify-evenly items-center gap-4 mb-10 md:mb-0"
        >
          <p class="p-black">
            Taking into account that many people suffer from various food
            intolerances and follow a vegan lifestyle, I dreamed up Mandula, not
            forgetting the lovers of traditional flavors.
          </p>
          <p class="p-black">
            You can choose from both sweet and savory cakes, choosing different
            alternatives. Every single dessert is made with love and dedication
            in my workshop, so I hope that eating it will bring you lots of joy
            and smiles.
          </p>
        </div>
        <div class="w-full md:w-2/5 flex justify-center items-center">
          <img
            class="w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[450px] lg:h-[450px]"
            src="../../assets/images/About2.png"
            alt="Aboutimg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const { data: aboutImage } = await useFetch(
  "https://hanacoric.com/wp-json/wp/v2/about-image"
);
console.log(aboutImage);

definePageMeta({
  layout: "about",
});
useHead({
  title: 'About',
  meta: [
    {
      name: 'About Page',
      content: 'Informative page about the company'
    }
  ]
})
</script>

<style scoped>
.w-screen {
  z-index: -1;
}

.flower-shadow {
  filter: drop-shadow(-8px 10px 11px #949494);
}

.p-black::first-letter {
  font-size: 200%;
  color: #a64817;
  font-family: "New_Spirit";
}
</style>
