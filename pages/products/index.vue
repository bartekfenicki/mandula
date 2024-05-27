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
      <div v-if="products.length > 0" class=" flex flex-col  md:grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  md:ms-64">
        <div class="w-full flex justify-center my-5 md:mx-5 mx-auto" v-for="product in products">
          <ProductsProductCard :product="product"/>
        </div>
      </div>
      <div v-else class="h-96  mt-5 md:ms-80">
          <p>
            No search matches...
          </p> 
      </div>
    </div>
    <div v-else>
      <div class="ms-auto md:ms-64 h-96">
        <div role="status">
            <svg aria-hidden="true" class="w-8 h-8 ms-16 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    
    <div class="pagination mb-16">
      <button class="font-['New_Spirit']" @click="prevPage" :disabled="currentPage === 1"><<</button>
      <span class="font-['New_Spirit'] mx-5 text-[#F0B9AC]">{{ currentPage }}</span>
      <button class="font-['New_Spirit']" @click="nextPage">>></button>
    </div>
  </div>
</template> 

<script setup lang="ts">


const category = ref("")
const tag = ref("")
const filter = ref("");
const itemsPerPage = 12;

const route = useRoute();


onMounted(() => {
  if (route.query.category) {
    category.value = route.query.category as string;
  }
});


const updateCategory = (newCategory: string) => {
  category.value = newCategory;
  currentPage.value = 1
};


const updateFilter = (newFilter: string) => {
  filter.value = newFilter;
};


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
  if(products.value.length > itemsPerPage - 1){
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
        const router = useRouter();

useHead(() => {
  const category = router.currentRoute.value.query.category;
  let pageTitle = 'Products'; // Default title

  if (category) {
    switch (category) {
      case '17':
        pageTitle = 'Cakes';
        break;
      case '20':
        pageTitle = 'Cookies';
        break;
      case '22':
        pageTitle = 'Custom Cakes';
        break;
      case '21':
        pageTitle = 'Makarons';
        break;
      case '19':
        pageTitle = 'Salty Sweets';
        break;
      case '18':
        pageTitle = 'Gluten Free';
        break;
      default:
        pageTitle = 'Products'; // Default title if category not matched
    }
  }

  return {
    title: pageTitle,
  };
});
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
