<template>
  <div class="flex justify-around flex-wrap">
    <div class="flex justify-center flex-col">
      <ul>
        <li class="gap-5 flex items-center flex-col sm:flex-row contact-details">
          <h2>Phone:</h2>
          <p> +48 454 545 475</p>
        </li>
        <li class="gap-5 my-10 flex items-center flex-col sm:flex-row contact-details">
          <h2>Email:</h2>
          <p> mandula17@gmail.hu</p>
        </li>
        <li class="gap-5 my-5 flex flex-col sm:flex-row contact-details">
          <h2>Social Media:</h2>
          <Socials/>
        </li>
        <li class="gap-5 my-10 flex items-center flex-col sm:flex-row contact-details">
          <h2>Adress:</h2>
          <p> Budapest, Mezőtárkány u. 4, 1173 Hungary </p>
        </li>
      </ul>
    </div>
    <img class="sm:w-96 sm:h-96 w-64 h-64 object-cover rounded-md" src="/assets/images/lady-cake.webp" alt="contact-photo">
  </div>
</template>

<script setup>
definePageMeta({
            layout: 'contact'
        })

useHead({
  title: 'Contact',
  meta: [
    {
      name: 'Contact Page',
      content: 'For contacting the company'
    }
  ]
})
</script>

<style scoped>

</style>