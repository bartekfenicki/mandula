<template>
  <div class="text-center">
    <h2 class="my-5"> Delivery Method </h2>
    <ul class="flex justify-center w-full gap-6">
        <li>
            <input type="radio" id="delivery" name="delivery" value="delivery" class="hidden peer" required />
            <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <div class="block">
                <h3> Delivery </h3>
                <img class="w-10 h-10 m-auto my-2" src="/assets/icons/delivery.png" alt="delivery">
                </div>
            </label>
        </li>
        <li>
            <input type="radio" id="pickup" name="pickup" value="hosting-big" class="hidden peer">
            <label for="hosting-big" class="inline-flex items-center center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                    <h3> Pick up </h3>
                <img class="w-10 h-10 m-auto my-2" src="/assets/icons/maps-and-flags.png" alt="pickup">
                </div>
            </label>
        </li>
    </ul>


  </div>
</template>

<script  setup>
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style>

</style>