<template>
    <div class="container-fluid flex flex-col justify-center items-center mb-10">
        <span class="fake-h1 mb-5"> Explore </span>
        <div class="container-fluid w-full overflow-x-auto flex justify-start items-center bg-[#b59a9422] border-y-2 border-[#F0B9AC] py-10 scrollspace">
          <NuxtLink :to="{ path: '/products', query: { category: '17' } }">
            <div class="explore-card z-40 cakes">
            <h2 class="explore-card-text  brightness-200">Cakes</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '20' } }">
            <div class="explore-card cookie dark">
            <h2 class="explore-card-text">Cookies</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '22' } }">
            <div class="explore-card custom-cakes dark">
            <h2 class="explore-card-text">Custom Cakes</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '21' } }">
            <div class="explore-card makaron dark">
            <h2 class="explore-card-text">Makarons</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '19' } }">
            <div class="explore-card salty dark">
            <h2 class="explore-card-text">Salty Sweets</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '18' } }">
            <div class="explore-card sugar-free ">
            <h2 class="explore-card-text">Gluten Free</h2>
          </div>
          </NuxtLink>
        </div>
    </div>
  
</template>

<script lang="ts" setup>

</script>

<style scoped>
.cakes {
  position: relative;
  background-image: url('/assets/images/cake.webp');
  background-position: center;
  background-size: cover;
  opacity: 85%;
  /* Make sure to set position relative to use pseudo-element */
}




.explore-card-text {
  position: relative;
  z-index: 2;
  color: white; /* Ensures the text is bright */
  filter: brightness(300%); /* Optional: Increase text brightness if needed */
}
.custom-cakes {
  background-image: url(/assets/images/customC.webp);
background-position: center;
background-size: cover;
}
.sugar-free {
  background-image: url(/assets/images/glutenfree.webp);
background-position: center;
background-size: cover;
}
.salty {
  background-image: url(/assets/images/salty.webp);
background-position: center;
background-size: cover;
}
.makaron {
  background-image: url(/assets/images/makaron.webp);
background-position: center;
background-size: cover;

}
.cookie {
  background-image: url(/assets/images/cookie.webp);
background-position: center;
background-size: cover;
}

.scrollspace::-webkit-scrollbar {
  width: 8px; /* Set width for the scrollbar */
  height: 8px;
  display: block; /* Hide scrollbar by default */
  
}

.scrollspace:hover::-webkit-scrollbar-thumb {
  display: flex; /* Show scrollbar on hover */
  
}

.scrollspace::-webkit-scrollbar-thumb {
  background-color: #F0B9AC; /* Set color for scrollbar thumb */
  border-radius: 0px; /* Set border radius */
  display: none;
}


</style>