import { ref, onMounted, computed } from 'vue';

const cartItems = ref([]);

onMounted(() => {
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    cartItems.value = JSON.parse(storedCartItems);
  }
});

const addToCart = (product) => {
  cartItems.value.push(product);
  localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
  
};

const removeFromCart = (index) => {
  cartItems.value.splice(index, 1);
  localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
};

const total = computed(() => {
  let totalPrice = 0;
  for (const item of cartItems.value) {
    totalPrice += Number(item.price);
  }
  return totalPrice;
});

export const useCart = () => {
  return {
    cartItems,
    addToCart,
    removeFromCart,
    total
  };
};