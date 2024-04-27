<template>
    <div class="container-fluid flex flex-col justify-center items-center mb-10">
        <h1 class="mb-5"> Explore </h1>
        <div class="container-fluid w-full flex-wrap flex justify-center items-center bg-[#b59a9422] border-y-2 border-[#F0B9AC] py-10">
          <div class="explore-card cakes">
            <h2 class="explore-card-text">Cakes</h2>
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
</style>