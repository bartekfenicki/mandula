<template>
  <div class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-5">
     <div class="my-16" v-for="bestseller in displayedBestsellers">
      <div class="best-card text-center">
        <img :src="bestseller.acf.image.url" alt="image" class="thumb">
        <div class="flex w-64 mx-auto justify-between items-center">
          <h2 class="m-2"> {{ bestseller.title.rendered }}</h2>
          <p class="m-2">{{ bestseller.acf.price }} HUF</p>
        </div>
        <button class="btn ">Select</button>
      </div>
    </div> 
  </div>
  <div class="pagination mb-10">
      <button class="font-['New_Spirit']" @click="prevPage" :class="{ 'disabled': currentPage === 1 }"><<</button>
      <span class="mx-5 font-['New_Spirit'] text-[#F0B9AC]">{{ currentPage }}</span>
      <button class="font-['New_Spirit']" @click="nextPage" :class="{ 'disabled': currentPage === totalPages }">>></button>
    </div>

</template>

<script setup>
// const {data: bestsellers, pending, refresh} = await useFetch(`https://hanacoric.com/wp-json/wp/v2/bestseller?per_page=3`);
// console.log(bestsellers)

const itemsPerPage = 3;

const currentPage = ref(1);
const totalItems = ref(0);
const totalPages = ref(0);

let bestsellersData = [];
const displayedBestsellers = ref([]);

const fetchBestsellers = async () => {
  const response = await fetch(`https://hanacoric.com/wp-json/wp/v2/bestseller?per_page=${itemsPerPage}&page=${currentPage.value}`);
  const data = await response.json();

  totalItems.value = parseInt(response.headers.get('X-WP-Total'));
  totalPages.value = parseInt(response.headers.get('X-WP-TotalPages'));

  bestsellersData = data || [];
  displayedBestsellers.value = bestsellersData;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchBestsellers();
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchBestsellers();
  }
};

fetchBestsellers();
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