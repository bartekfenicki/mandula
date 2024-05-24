<template>
    <div v-if="products">
      <div class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-5">
        <div class="w-full flex justify-center my-5 mx-auto" v-for="product in products" >
          <ProductsProductCard :product="product"/>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div class="pagination mb-10">
      <button class="font-['New_Spirit']" @click="prevPage" :class="{ 'disabled': currentPage === 1 }"><<</button>
      <span class="mx-5 font-['New_Spirit'] text-[#F0B9AC]">{{ currentPage }}</span>
      <button class="font-['New_Spirit']" @click="nextPage" :class="{ 'disabled': currentPage === 2 }">>></button>
    </div>

</template>

<script setup lang="ts">

const category = ref("62")
const tag = ref("")
const filter = ref("");
const itemsPerPage = 3;
const currentPage = ref<number>(1);
watch(currentPage, (newPage) => {
  if (process.client) {
    localStorage.setItem('currentPage', newPage.toString());
  }
});

const { data: products } = useFetch('/api/data', {
  query: { currentPage, filter, itemsPerPage, category, tag }
});
console.log(products)


const nextPage = () => {
  if(currentPage.value < 5){
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

</script>

<style scoped>
 .thumb {
  max-height: 160px;
  max-width: 90%;
  margin: 0 auto;
  border-radius: 10px;
}
.disabled {
  color: grey;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>