<template>
    <header>
        <nav>
            <div class=" w-full bg-[#19151499] justify-between items-center gap-4 sm:flex block px-5 md:px-10 lg:px-32">
                <div class="flex w-full sm:hidden">
                    <div class=" my-2 flex-col ms-5 justify-end flex">
                        <NuxtLink to="/">
                            <img class="w-16 h-16" src="/assets/logos/Almond-simple.svg" alt="logo-mobile"/>
                        </NuxtLink>
                    </div>
                <div class="me-5 ms-auto flex ">
                    <button id="toggleMenu" class="text-[#FDF1EE] hover:text-[#fefaf9]"><img class="w-6 h-6" src="/assets/images/menu.png" alt="menu-burger" /></button>
                </div>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="nav-item-hover" to="/">Home</NuxtLink>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="nav-item-hover" to="/about">About Us</NuxtLink>
                </div>
                <div class="w-28 self-stretch flex-col justify-center items-center hidden sm:flex">
                    <NuxtLink to="/">
                        <img class="w-20 h-20 my-2" src="/assets/logos/Almond-simple.svg" alt="logo-page"/>
                    </NuxtLink>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="nav-item-hover" to="/products">Shop</NuxtLink>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="nav-item-hover" to="/contact">Contact Us</NuxtLink>
                </div>
                <div class="text-center justify-end sm:justify-center me-5 sm:me-auto  hidden sm:flex text-block">
                    <button class="" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        <img class="relative w-6 h-6 " src="/assets/icons/shopping-cart.png" alt="cart"/>
                        <div class=" absolute top-7 ms-4  bg-red-500 text-white rounded-full w-5 h-5 hidden sm:flex items-center justify-center text-xs">
                            {{ cartItems.length }}
                        </div>
                    </button>
                </div>
                </div>
        </nav>
       
    </header>

<!-- drawer component -->
<div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-[#FDF1EE] dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        <img src="/assets/logos/redbrown.svg" alt="cart-logo" class="w-16 h-16 object-cover">
    </h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close menu</span>
    </button>
  <div class="py-4  overflow-y-auto">
    <ul class="space-y-2 font-medium mt-4">
        <li class="flex justify-between">
            <p>Total:</p>
            <p>{{ total }} HUF</p>
        </li>
        <li v-for="(item, index) in cartItems" :key="index" class="flex items-center justify-between">
            <div class="flex items-center">
                <img :src="item.images[0].src" alt="Item Image" class="w-8 h-8 object-cover">
                <div class="ml-4">
                    <p class="text-sm">{{ item.name }}</p>
                    <p class="text-sm">{{ item.price }} HUF</p>
                </div>
            </div>
            <button @click="removeFromCart(index)" class="text-red-500 hover:text-red-700">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </li>
        <li class="flex items-center justify-center">
            <NuxtLink to="/checkout" class="items-center justify-center flex">
                <button class=" btn absolute bottom-10" type="button" data-drawer-target="drawer-navigation" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">
                    checkout
                </button>
            </NuxtLink>
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


const { cartItems, removeFromCart, total } = useCart();



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
body.drawer-open {
    overflow: hidden;
}
.router-link-exact-active {
  color: #F6CFC5;
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