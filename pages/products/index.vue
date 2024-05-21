<template>
  <div class="mt-32">
    
    <h1 class="title">Products</h1>

<ProductsFilters 
      :category="category" 
      :filter="filter" 
      @update:category="updateCategory" 
      @update:filter="updateFilter"
      @pageChange="pageChange" 
    />

    <div v-if="products">
      <div class="sm:grid lg:grid-cols-3 md:grid-cols-2 ms-auto md:ms-64">
        <div class="w-full flex justify-center my-5 mx-auto" v-for="product in products" >
          <ProductsProductCard :product="product"/>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

    
    <div class="pagination mb-16">
      <button class="font-['New_Spirit']" @click="prevPage" :disabled="currentPage === 1"><<</button>
      <span class="font-['New_Spirit'] mx-5 text-[#F0B9AC]">{{ currentPage }}</span>
      <button class="font-['New_Spirit']" @click="nextPage" :disabled="currentPage === 5">>></button>
    </div>
  </div>
</template> 

<script setup lang="ts">


const category = ref("")
const tag = ref("")
const filter = ref("");
const itemsPerPage = 12;


const updateCategory = (newCategory: string) => {
  category.value = newCategory;
  currentPage.value = 1
};


const updateFilter = (newFilter: string) => {
  filter.value = newFilter;
};

// modulus + length

// Current page properties
const currentPage = ref<number>(1);
watch(currentPage, (newPage) => {
  if (process.client) {
    localStorage.setItem('currentPage', newPage.toString());
  }
});
onMounted(() => {
  const savedPage = parseInt(localStorage.getItem('currentPage') || '1');
  if (savedPage) {
    currentPage.value = savedPage;
  }
});

// Fetch products data
const { data: products } = useFetch('/api/data', {
  query: { currentPage, filter, itemsPerPage, category, tag }
});

console.log(products)

// Methods to change page
const nextPage = () => {
  if(currentPage.value < 5){
    currentPage.value++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const pageChange = () => {
  currentPage.value = 1
  if (category.value != "" ) {
    category.value = ""
  }
}

// layout
definePageMeta({
            layout: 'products'
        })
</script>  

 <style scoped>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination button {
  margin: 0 5px;
}
</style>
