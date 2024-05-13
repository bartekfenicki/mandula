<template>
  <div class="">
    <Navbar/>
  </div>
<h1 class="my-10 ms-20">
  Get in Touch with Us
</h1>

  <div>
    <slot />
  </div>
  
  <div class=" w-full h-96 mt-10">
    <iframe class="w-full h-96"
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1173%20Budapest,%20Mez%C5%91t%C3%A1rk%C3%A1ny%20utca%204.+(Mandula17)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="600" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
    </iframe>
  </div>

  <BottomNav/>

</template>

<script lang="ts" setup>

</script>

<style>

</style>