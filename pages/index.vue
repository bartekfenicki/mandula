<template>
    <div class="container-fluid mt-10">
        <Socials/>
    </div>
    <div class="container-fluid flex flex-col justify-center items-center">
        <span class="fake-h1"> Best Sellers </span>
        <HomeBestsellers/>
    </div>
    <div class="container-fluid">
        <HomeExploreTabs/>
    </div>
    <div class="container-fluid">
        <HomeNewsletter/>
    </div>
    <div class="container-fluid flex flex-col justify-center items-center">
        <HomePartners/>
    </div>
    </template>
    
    <script setup>

useHead({
  title: 'Home Mandula',
  meta: [
    {
      name: 'Home',
      content: 'Main page for Mandula'
    }
  ]
})
   
    </script>

    <style>
    body {
        background-color: #FDF1EE;
    }
    </style>