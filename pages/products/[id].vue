<template>
    
    <p>
        product details for {{ id }}
    </p>
    </template>
    <script setup>

    const { id } = useRoute().params

    definePageMeta({
            layout: 'products'
        })
    </script>
    
    <style scoped>
    
    </style>