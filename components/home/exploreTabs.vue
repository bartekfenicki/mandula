<template>
    <div class="container-fluid flex flex-col justify-center items-center mb-10">
        <h1 class="mb-5"> Explore </h1>
        <div class="container-fluid w-full overflow-x-auto flex justify-start items-center bg-[#b59a9422] border-y-2 border-[#F0B9AC] py-10 scrollspace">
          <div class="explore-card cakes">
            <h2 class="explore-card-text">Cakes</h2>
          </div>
          <div class="explore-card custom-cakes">
            <h2 class="explore-card-text">Custom Cakes</h2>
          </div>
          <div class="explore-card custom-cakes">
            <h2 class="explore-card-text">Custom Cakes</h2>
          </div>
          <div class="explore-card custom-cakes">
            <h2 class="explore-card-text">Custom Cakes</h2>
          </div>
          <div class="explore-card sugar-free">
            <h2 class="explore-card-text">Sugar-free Deserts</h2>
          </div>
          <div class="explore-card sugar-free">
            <h2 class="explore-card-text">Sugar-free Deserts</h2>
          </div>
        </div>
    </div>
  
</template>

<script lang="ts" setup>

</script>

<style scoped>
.cakes {
background-image: url(/assets/images/custom.jpg);
background-position: center;
background-size: contain;
}
.custom-cakes {
  background-image: url(/assets/images/cakepop.jpg);
background-position: center;
background-size: contain;
}
.sugar-free {
  background-image: url(/assets/images/christmas.jpg);
background-position: center;
background-size: contain;
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