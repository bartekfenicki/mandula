<template>
 <h1> about </h1>
 <div>
    <ul>
      <li v-for="product in products"  :key="product.id">
        <h3>{{ product.title.rendered }}</h3>
        <h4>{{ product.acf.price }}</h4>
        <p>{{ product.acf.description }}</p>
        <p>{{ product.acf.ingredients }}</p>
        <img class="hero-img-cake" :src="product.acf.cake_image.url">
      </li>
    </ul>
   </div>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Corporis unde ab non nisi optio numquam atque facilis, aliquam 
        velit expedita dolore nostrum impedit voluptatum cum, quasi maxime,
         a totam! Corporis!
    </p>
</template>
<script setup>
const { data: products } = await useFetch('http://mandula-cakeshop.local/wp-json/wp/v2/cakes/cake');

console.log(products)

</script>

<style scoped>
.hero-img-cake {
  height: 300px;
  width: auto;
}
ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
ul li {
  margin: 20px;
}
</style>