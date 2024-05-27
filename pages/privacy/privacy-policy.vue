<template>
  <div v-if="policy">
   <h1 class="my-10"> {{ policy.title.rendered }} </h1>
      <div class="my-5 mx-10 md:mx-0" v-html="policy.content.rendered"></div>
  </div>
</template>

<script lang="ts" setup>
 const {data: policy} = await useFetch(`https://hanacoric.com/wp-json/wp/v2/privacy-and-policy/610`);
console.log(policy)
definePageMeta({
            layout: 'policies'
        })
useHead({
  title: 'Privacy',
  meta: [
    {
      name: 'privacy',
      content: 'Infroms about privacy and policy'
    }
  ]
})
</script>

<style scoped>
.privacy {
  color: black;
}
</style>