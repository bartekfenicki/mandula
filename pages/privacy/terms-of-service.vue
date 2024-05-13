<template>
  <div v-if="terms">
   <h1 class="my-10"> {{ terms.title.rendered }} </h1>
      <div class="my-5 mx-10 md:mx-0" v-html="terms.content.rendered"></div>
  </div>
</template>

<script lang="ts" setup>
 const {data: terms} = await useFetch(`https://hanacoric.com/wp-json/wp/v2/privacy-and-policy/611`);
console.log(terms)
definePageMeta({
            layout: 'policies'
        })
</script>

<style>

</style>