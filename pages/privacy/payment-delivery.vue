<template>
  <div v-if="shipping">
   <h1 class="my-10"> {{ shipping.title.rendered }} </h1>
      <p class="my-5 mx-10 md:mx-0" v-html="shipping.content.rendered"></p>
  </div>
</template>

<script lang="ts" setup>
const {data: shipping} = await useFetch(`https://hanacoric.com/wp-json/wp/v2/privacy-and-policy/612`);
console.log(shipping)

definePageMeta({
            layout: 'policies'
        })
</script>

<style scoped>
p {
  color: black;
}
h2 {
  color: black;
}
</style>