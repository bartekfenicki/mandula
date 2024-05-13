<template>
    <header>
        <nav>
            <div class=" w-full bg-neutral-600 bg-opacity-70 justify-between items-center gap-4 sm:flex block px-5 md:px-10 lg:px-32">
                <div class="flex w-full sm:hidden">
                    <div class=" my-2 flex-col ms-5 justify-end flex">
                        <img class="w-16 h-16" src="/assets/logos/almond.svg"/>
                    </div>
                <div class="me-5 ms-auto flex ">
                    <button id="toggleMenu" class="text-[#FDF1EE] hover:text-[#fefaf9]"><img class="w-6 h-6" src="/assets/images/menu.png" /></button>
                </div>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="text-[#FDF1EE] hover:text-[#fefaf9]" to="/">Home</NuxtLink>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="text-[#FDF1EE] hover:text-[#fefaf9]" to="/about">About Us</NuxtLink>
                </div>
                <div class="w-28 self-stretch flex-col justify-center items-center hidden sm:flex">
                    <img class="w-20 h-20 my-2" src="/assets/logos/almond.svg"/>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="text-[#FDF1EE] hover:text-[#fefaf9]" to="/products">Shop</NuxtLink>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="text-[#FDF1EE] hover:text-[#fefaf9]" to="/contact">Contact Us</NuxtLink>
                </div>
                <div class="text-center justify-end sm:justify-center me-5 sm:me-auto  hidden sm:flex text-block">
                    <button class="" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        <img class="w-6 h-6" src="/assets/icons/shopping-cart.png"/>
                    </button>
                </div>
                </div>
        </nav>
       
    </header>

<!-- drawer component -->
<div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Cart</h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close menu</span>
    </button>
  <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <NuxtLink class="text-[#FDF1EE] hover:text-[#fefaf9]" to="/checkout">Checkout</NuxtLink>
            </a>
         </li>
      </ul>
   </div>
</div>

</template>
<script setup>
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<script>
export default {
    mounted() {
        const toggleMenuButton = document.getElementById('toggleMenu');
        const navLinks = document.querySelectorAll('nav .text-block');

        toggleMenuButton.addEventListener('click', function() {
            navLinks.forEach(function(link, index) {
                setTimeout(() => {
                    link.classList.toggle('hidden');
                    link.classList.toggle('flex');
                    link.style.animation = link.classList.contains('hidden') ? '' : 'slideIn 0.01s ease-in-out forwards';
                }, index * 100);
            });
        });
    }
}
</script>

<style scoped>
.router-link-exact-active {
  color: #fefaf9;
}
nav {
    font-family: "New Spirit";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
@media screen and (max-width: 768px) {
    nav {
        font-size: 14px;
    }
}

  @keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(0%);
    }
    to {
        opacity: 1;
        transform: translateY(100%);
    }
}  
</style>