<template>
    <div class="container-fluid flex flex-col justify-center items-center mb-10">
        <h1 class="mb-5"> Explore </h1>
        <div class="container-fluid w-full overflow-x-auto flex justify-start items-center bg-[#b59a9422] border-y-2 border-[#F0B9AC] py-10 scrollspace">
          <NuxtLink :to="{ path: '/products', query: { category: '17' } }">
            <div class="explore-card cakes">
            <h2 class="explore-card-text">Cakes</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '20' } }">
            <div class="explore-card cookie">
            <h2 class="explore-card-text">Cookies</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '22' } }">
            <div class="explore-card custom-cakes">
            <h2 class="explore-card-text">Custom Cakes</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '21' } }">
            <div class="explore-card makaron">
            <h2 class="explore-card-text">Makarons</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '19' } }">
            <div class="explore-card salty">
            <h2 class="explore-card-text">Salty Sweets</h2>
          </div>
          </NuxtLink>
          <NuxtLink :to="{ path: '/products', query: { category: '18' } }">
            <div class="explore-card sugar-free">
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
background-image: url(/assets/images/cakepop.jpg);
background-position: center;
background-size: cover;
}
.custom-cakes {
  background-image: url(/assets/images/customC.png);
background-position: center;
background-size: cover;
}
.sugar-free {
  background-image: url(/assets/images/glutenfree.png);
background-position: center;
background-size: cover;
}
.salty {
  background-image: url(/assets/images/salty.png);
background-position: center;
background-size: cover;
}
.makaron {
  background-image: url(/assets/images/makaron.png);
background-position: center;
background-size: cover;
}
.cookie {
  background-image: url(/assets/images/cookie.png);
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