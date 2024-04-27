<template>
  <footer>
    <div class="flex justify-between mt-4 py-5 bg-[#191514]">
      <div class="flex flex-col justify-center ms-2 sm:ms-10">
        <img class="w-14 h-14" src="https://via.placeholder.com/56x59" />
      </div>
        <div class="flex justify-center items-center ms-10 sm:ms-16 lg:ms-20">
            <ul class="flex flex-col justify-center items-center md:text-base text-xs">
              <li>
                  Payment and Delivery
              </li>
              <li>
                  Terms of Service
              </li>
              <li>
                Privacy and Policy
              </li>
              <li>
                Copyright
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