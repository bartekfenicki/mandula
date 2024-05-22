<template>
  <h2 class="title">
      Products
    </h2>
    
<div class="relative w-full max-w-xs mx-auto flex mt-10 mb-20">
    <input
      v-model="filter"
      type="text"
      class="peer w-full h-12 inline-flex items-center pl-12 pr-4 rounded-xl border border-slate-300 text-slate-700 placeholder:text-slate-300 font-sans leading-snug outline-none"
      placeholder="Search"
    />
  </div>

  

    <div v-if="products">
      <div class="sm:grid lg:grid-cols-3 sm:grid-cols-2">
          <div class="w-full flex justify-center my-5 mx-auto" v-for="product in sortedProducts" :key="product.name">
            <ProductCard :product="product"/>
          </div>
        </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    </template>
<script setup lang="ts">
//onmounted
const { data: products} = await useFetch('/api/data');

const page = ref(1)


definePageMeta({
            layout: 'products'
        })


const filter = ref("");

const filteredProducts = computed(() => {
  if (!filter.value) {
    return products.value
  }

  const filterRe = new RegExp(filter.value, 'i')
  return products.value.filter((product: { name: any; id: any; tag: { slug: any; }; categories: { name: any; }; }) => {
    return [product.name, product.id, product.tag?.slug, product.categories?.name].some((prop) =>
    String(prop).match(filterRe)
    )
  })
})
const sortedProducts = computed(() => {
  return filteredProducts.value.sort((a: { name: string; }, b: { name: any; }) => {
    return a.name.localeCompare(b.name)
  })

})


</script>
    
<style scoped>
    
</style>