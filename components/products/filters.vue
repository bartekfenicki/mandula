<template>
  <div class="filters-sidebar mt-5 relative md:fixed flex flex-col justify-center items-center border-[#7E1D3C] bg-[#fefaf977] shadow-2xl border-2 rounded-lg">
    <div class="w-full max-w-xs mx-auto px-3 flex flex-col mt-3 mb-6">
      <input
        v-model="internalFilter"
        @input="$emit('update:filter', internalFilter)"
        @click="emitPageChange"
        type="text"
        class="peer w-full h-12 inline-flex items-center ps-8 pe-4 rounded-lg border border-[#212020] text-slate-700 placeholder:text-slate-300 font-sans leading-snug outline-none"
        placeholder="Search"
      />
    </div>
    <p class="ms-4 me-auto mb-2">categories:</p>
    <ul class="w-64 mx-3 mb-4 max-w-xs text-sm font-medium text-gray-900 bg-transparent border border-black rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li class="w-full border-b border-black rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
          <input
            id="all-items"
            type="radio"
            value=""
            name="list-radio"
            v-model="internalCategory"
            @change="emitUpdateCategory"
            class="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black my-1"
          />
          <label for="all-items" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All Items</label>
        </div>
      </li>
      <li class="w-full border-b border-black rounded-t-lg dark:border-gray-600" v-for="item in categoryItems" :key="item.id">
        <div class="flex items-center ps-3">
          <input
            @change="emitUpdateCategory"
            v-model="internalCategory"
            :id="item.id"
            type="radio"
            :value="item.value"
            name="list-radio"
            class="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black my-1"
          />
          <label :for="item.id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ item.label }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// Define props
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['update:category', 'update:filter', 'pageChange']);

// Internal states to handle v-model
const internalCategory = ref(props.category);
const internalFilter = ref(props.filter);

watch(() => props.category, (newCategory) => {
  internalCategory.value = newCategory;
});

watch(() => props.filter, (newFilter) => {
  internalFilter.value = newFilter;
});

const emitUpdateCategory = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits('update:category', target.value);
};

const emitPageChange = () => {
  emits('pageChange');
};

const categoryItems = [
  { id: "cakes", value: "17", label: "Cakes" },
  { id: "cookies", value: "20", label: "Cookies" },
  { id: "custom-cakes", value: "22", label: "Custom Cakes" },
  { id: "makaroons", value: "21", label: "Makaroons" },
  { id: "salty-sweets", value: "19", label: "Salty Sweets" },
  { id: "sugar-free", value: "18", label: "Sugar-Free Desserts" }
];
</script>
