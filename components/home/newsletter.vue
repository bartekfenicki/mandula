<template>
  <div class="container-fluid flex flex-col items-center justify-center bg-[#F0B9AC] pb-5">
    <h1 class="text-[#A64817]">Newsletter</h1>
    <p class="text-[#A64817] m-5">Never miss on sales and new additions to our delicious products!</p>
    <form @submit.prevent="submitForm" class="block mx-auto sm:flex gap-5">
      <input
        type="email"
        v-model="email"
        class="bg-gray-50 border border-[#A64817] text-gray-400 text-sm rounded-lg focus:ring-pink-100 focus:border-pink-100 block mb-5 p-2.5 w-64"
        placeholder="Email (Required)"
        required
      />
      <button
        type="submit"
        class="text-white bg-[#A64817] hover:bg-[#753727] focus:ring-4 focus:outline-none hover:text-pink focus:ring-black transition-transform font-medium rounded-lg text-sm w-full sm:w-auto px-8 mb-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const submitForm = async () => {
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email.value })
    })
    if (response.ok) {
      alert('Thank you for subscribing!')
    } else {
      const errorData = await response.json()
      alert(`Error: ${errorData.message}`)
    }
  } catch (error) {
    console.error('Error:', error)
    alert('There was an error. Please try again.')
  }
}
</script>
<style>

</style>