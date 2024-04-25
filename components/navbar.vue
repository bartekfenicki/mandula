<template>
    <header>
        <nav class="container mx-auto flex justify-center mt-4">
            <ul class="flex mx-20 gap-10">
            <li >
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li >
                <NuxtLink to="/about">About Us</NuxtLink>
            </li>
        </ul>
        <div class="logo mx-20">logo</div>
        <ul class="flex mx-20 gap-10">
            <li >
                <NuxtLink to="/products">Shop</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">Contact Us</NuxtLink>
            </li>
        </ul>
        </nav>
        
    </header>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
  color: #c79ac4;
}
</style>