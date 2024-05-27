<template>
  <div class="max-w-xl mx-auto mt-10">
    <h1 class="mb-6 text-center">Checkout</h1>
    <div class="flex border-b border-gray-200">
      <button @click="activateTab(1)" :class="{ 'bg-gray-200': activeTab === 1, 'text-gray-900': activeTab === 1, 'bg-gray-100': activeTab !== 1, 'text-gray-600': activeTab !== 1 }" class="w-1/2 py-2 px-4 focus:outline-none">Private</button>
      <button @click="activateTab(2)" :class="{ 'bg-gray-200': activeTab === 2, 'text-gray-900': activeTab === 2, 'bg-gray-100': activeTab !== 2, 'text-gray-600': activeTab !== 2 }" class="w-1/2 py-2 px-4 focus:outline-none">Business</button>
    </div>
    <div v-show="activeTab === 1" class="py-4">
      <CheckoutItems/>
      <CheckoutBillingInfo/>
      <CheckoutDeliveryMethod/>
      <CheckoutDeliveryInfo/>
    </div>
    <div v-show="activeTab === 2" class="py-4">
        <CheckoutItems/>
        <CheckoutDeliveryMethod/>
        <CheckoutBillingInfo/>
        <CheckoutDeliveryInfo/>
    </div>
  </div>
</template>

<script  setup>
import { initFlowbite } from 'flowbite'



// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

definePageMeta({
            layout: 'checkout'
        })
useHead({
  title: 'Checkout',
  meta: [
    {
      name: 'Checkout Page',
      content: 'for sending the cart form'
    }
  ]
})
</script>

<script>
export default {
  data() {
    return {
      activeTab: 1
    };
  },
  methods: {
    activateTab(tabNumber) {
      this.activeTab = tabNumber;
    }
  }
};
</script>
<style>

</style>