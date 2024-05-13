<template>
  <footer>
    <div class="flex justify-between  py-5 bg-[#191514]">
      <div class="flex flex-col justify-center ms-2 sm:ms-10">
        <img class="w-14 h-14" src="/assets/logos/almond.svg"/>
      </div>
        <div class="flex justify-center items-center ms-10 sm:ms-16 lg:ms-20">
            <ul class="flex flex-col justify-center items-center md:text-base text-xs">
              <li>
                 <NuxtLink class="text-[#FDF1EE] hover:text-[#fefaf9]" to="/privacy/payment-delivery">Payment and Delivery</NuxtLink>
              </li>
              <li>
                 <NuxtLink class="text-[#FDF1EE] hover:text-[#fefaf9]" to="/privacy/terms-of-service">Terms of Service</NuxtLink>
              </li>
              <li>
                 <NuxtLink class="text-[#FDF1EE] hover:text-[#fefaf9]" to="/privacy/privacy-policy">Privacy and Policy</NuxtLink>
              </li>
              
            </ul>
        </div>
        <div class="flex flex-col justify-center items-center me-2 sm:me-10">
          <socials/>
        </div>
    </div>
  </footer>
  
</template>

<script setup>

</script>

<style scoped>
ul li {
  color: white;
}
</style>