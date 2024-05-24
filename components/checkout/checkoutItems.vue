<template>
  <div>
    <ul>
      <li class="flex justify-between items-center my-2" v-for="(item, index) in cartItems" :key="index">
        <div class="flex gap-2">
          <button @click="removeFromCart(index)" class="text-red-500 hover:text-red-700">
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <img :src="item.images[0].src" alt="Item Image" class="w-32 h-32 object-cover">
        </div>
          <p class="text-lg">{{ item.name }}</p>
          <p >{{ item.price }} HUF</p>
      </li>
      <li class="flex justify-between">
            <p>Total:</p>
            <p>{{ total }} HUF</p>
      </li>
    </ul>
  </div>
</template>

<script setup>

const { cartItems, total, removeFromCart } = useCart();

</script>

<style>

</style>