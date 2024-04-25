<template>
    <header>
        <nav>
            <div class=" w-full bg-neutral-600 bg-opacity-50 justify-between items-center gap-4 sm:flex block md:px-10 lg:px-32">
                <div class="flex w-full sm:hidden">
                    <div class=" my-2 flex-col ms-5 justify-end flex">
                        <img class="w-14 h-14" src="https://via.placeholder.com/56x59" />
                    </div>
                <div class="me-5 ms-auto flex ">
                    <button id="toggleMenu" class="text-pink-100 hover:text-[#fefaf9]"><img class="w-6 h-6" src="/assets/images/menu.png" /></button>
                </div>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="text-pink-100 hover:text-[#fefaf9]" to="/">Home</NuxtLink>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="text-pink-100 hover:text-[#fefaf9]" to="/about">About Us</NuxtLink>
                </div>
                <div class="w-28 self-stretch flex-col justify-center items-center hidden sm:flex">
                    <img class="w-14 h-14" src="https://via.placeholder.com/56x59" />
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="text-pink-100 hover:text-[#fefaf9]" to="/products">Shop</NuxtLink>
                </div>
                <div class="grow shrink basis-0 h-6 me-5 sm:me-auto justify-end sm:justify-center items-center hidden sm:flex text-block">
                    <NuxtLink class="text-pink-100 hover:text-[#fefaf9]" to="/contact">Contact Us</NuxtLink>
                </div>
                </div>
        </nav>
       
    </header>
</template>

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
    font-size: 18px;
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