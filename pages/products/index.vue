<template>
    <h1> products </h1>
    <p>
        items display
        <Item />
    </p>
    </template>
<script setup>
    import Item from './item.vue';

        definePageMeta({
            layout: 'products'
        })
    
</script>
    
<style scoped>
    
</style>