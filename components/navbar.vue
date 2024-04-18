<template>
    <header>
        <ul>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products">Products</NuxtLink>
            </li>
        </ul>
    </header>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
  color: #c79ac4;
}
</style>