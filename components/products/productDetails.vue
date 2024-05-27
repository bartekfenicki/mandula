<template>
  <div v-if="product" class="w-full h-max">
   
    <transition name="fade">
      <div
        v-show="showAlert"
        class="p-4 mb-4 fixed bottom-0  md:right-[20%] text-center  w-full md:w-[60%] text-sm text-green-900 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-400 transition-opacity duration-500"
        role="alert"
      >
        <span class="font-medium">Success!</span> You have successfully added a product to the cart.
      </div>
    </transition>
   


    <div class="w-full h-full flex flex-row lg:justify-start justify-center">
      <h1 class="lg:h2-pink mb-10 lg:ms-16 h2-brown">
        {{ product.name }}
      </h1>
    </div>

    <div>
      <div class="flex justify-around">
        <div class="max-w-2xl flex justify-start items-center flex-col">
          <img
            :src="product.images[0].src"
            alt="Product Image"
            class="lg:w-[488px] lg:h-[488px] sm:w-[188px] sm:h-[188px] md:w-[388px] md:h-[388px] rounded-lg border-2"
            style="border-color: #f0b9ac"
          />
          <div class="text-left flex justify-center items-center flex-col">
            <h2 class="lg:w-[75%] lg:h3-pink lg:flex lg:justify-start hidden">
              Product description:
            </h2>
            <div
              v-html="product.short_description"
              class="w-[75%] short-description-wrapper m-0 lg:block hidden"
            ></div>
          </div>
        </div>
        <div
          class="w-full flex-col p-8 rounded-lg border-2 max-w-2xl fill-white lg:block hidden"
          style="border-color: #f0b9ac"
        >
          <div>
            <div class="flex items-center justify-between">
              <label
                class="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="fill-pink"
              >
                <input
                  type="radio"
                  name="check"
                  @change="ToggleMenu(1)"
                  class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
                  id="fill-pink"
                  checked
                />
                <label for="default-checkbox" class="p-product mt-0 ml-5">{{
                  splitName(smallMenu[0].name)[0]
                }}</label>
              </label>
              <p class="flex items-left p-product mt-0">
                {{ smallMenu[0].regular_price }}
              </p>
            </div>

            <div
              class="ml-[40px] flex flex-col justify-center items-start"
              v-if="showMenu"
            >
              <div class="flex flex-col justify-center w-full">
                <label
                  class="w-full flex items-center justify-between"
                  v-for="item in smallMenu"
                >
                  <label
                    class="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlFor="fill-pink"
                  >
                    <input
                      type="radio"
                      name="variations"
                      class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
                      id="fill-pink"
                      @change="calculateSubtotal(parseInt(item.regular_price))"
                    />
                    <label
                      for="default-checkbox"
                      class="p-product-black mt-0 ml-5"
                      >{{ splitName(item.name)[1] }}</label
                    >
                  </label>
                  <p
                    class="p-product mt-0"
                    v-if="splitName(item.name)[1] !== 'Traditional'"
                  >
                    + {{ item.regular_price - smallMenu[0].regular_price }}
                  </p>
                </label>
              </div>
              <div class="">
                <div class="p-product-black">
                  <div class="p-product-black">INGREDIENTS:</div>
                  <div v-html="smallMenu[0].description" class="ingredients"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <label
              class="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="fill-pink"
            >
              <input
                type="radio"
                name="check"
                @change="ToggleMenu(2)"
                class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
                id="fill-pink"
              />
              <label for="default-checkbox" class="p-product mt-0 ml-5">{{
                splitName(mediumMenu[0].name)[0]
              }}</label>
            </label>
            <p class="flex items-left p-product mt-0">
              {{ mediumMenu[0].regular_price }}
            </p>
          </div>

          <div
            class="ml-[40px] flex flex-col justify-center items-start"
            v-if="showMenuTwo"
          >
            <div class="w-full flex flex-col justify-center">
              <label
                class="w-full flex items-center justify-between"
                v-for="item in mediumMenu"
              >
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="fill-pink"
                >
                  <input
                    type="radio"
                    name="variations"
                    class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
                    id="fill-pink"
                    @change="calculateSubtotal(parseInt(item.regular_price))"
                  />
                  <label
                    for="default-checkbox"
                    class="p-product-black mt-0 ml-5"
                    >{{ splitName(item.name)[1] }}</label
                  >
                </label>
                <p
                  class="p-product mt-0"
                  v-if="splitName(item.name)[1] !== 'Traditional'"
                >
                  + {{ item.regular_price - mediumMenu[0].regular_price }}
                </p>
              </label>
            </div>
            <div class="">
              <div class="p-product-black">
                <div class="p-product-black">INGREDIENTS:</div>
                <div v-html="mediumMenu[0].description" class="ingredients"></div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <label
              class="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="fill-pink"
            >
              <input
                type="radio"
                name="check"
                @change="ToggleMenu(3)"
                class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
                id="fill-pink"
              />
              <label for="default-checkbox" class="p-product mt-0 ml-5">{{
                splitName(largeMenu[0].name)[0]
              }}</label>
            </label>
            <p class="flex items-left p-product mt-0">
              {{ largeMenu[0].regular_price }}
            </p>
          </div>
          <div
            class="ml-[40px] flex flex-col justify-center items-start"
            v-if="showMenuThree"
          >
            <div class="w-full flex flex-col justify-center">
              <label
                class="w-full flex items-center justify-between"
                v-for="item in largeMenu"
              >
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="fill-pink"
                >
                  <input
                    type="radio"
                    name="variations"
                    class="focus:ring-0 before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border checked:border-white-500 checked:fill-pink checked:before:fill-pink hover:before:opacity-10"
                    id="fill-pink"
                    @change="calculateSubtotal(parseInt(item.regular_price))"
                  />
                  <label
                    for="default-checkbox"
                    class="p-product-black mt-0 ml-5"
                    >{{ splitName(item.name)[1] }}</label
                  >
                </label>
                <p
                  class="p-product mt-0"
                  v-if="splitName(item.name)[1] !== 'Traditional'"
                >
                  + {{ item.regular_price - largeMenu[0].regular_price }}
                </p>
              </label>
            </div>
              <div class="p-product-black">
                <div class="p-product-black">INGREDIENTS:</div>
                <div v-html="largeMenu[0].description" class="ingredients"></div>
              </div>
          </div>

          <div class="flex justify-between items-center mt-10">
            <div class="flex flex-row items-center">
              <p class="p-product-black mt-0 ml-6">Box:</p>
            </div>
            <p class="p-product-black m-0 font-bold">+ 500 HUF</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="p-product-black ml-6">Sub-total:</p>
            <p class="p-product-black font-bold" id="subtotal">0</p>
          </div>
          <div class="flex justify-center"> 
            <button class="btn" @click="handleAddToCart(product)"> Add to Cart </button>
          </div>
        </div>
      </div>
    </div>

    <!--mobile version-->
    <div
      class="w-full h-fit flex flex-col justify-center items-center lg:hidden"
    >
      <div class="w-full flex flex-col justify-center items-center">
        <div class="w-fit flex flex-col justify-center items-center">
          <div class="w-full flex justify-start mt-10">
            <p
              class="w-fit h-[50px] h2-brown lg:hidden flex m-0 md:w-full md:flex md:h-[80px] md:justify-center md:items-center"
            >
              Slices:
            </p>
          </div>
          <div
            class="w-fit flex flex-row justify-center space-x-4 items-center"
          >
            <button class="btn-product hover-pink w-[100px]" 
            @change="calculateSubtotal(parseInt(item.regular_price))" 
            name="variations">8</button>
            <button class="btn-product hover-pink w-[100px]">14</button>
            <button class="btn-product hover-pink w-[100px]">20</button>
          </div>
        </div>
        <div class="w-fit flex flex-col justify-center items-center">
          <div class="w-full flex justify-start mt-10">
            <p
              class="w-fit h-[50px] h2-brown lg:hidden flex m-0 md:w-full md:flex md:h-[80px] md:justify-center md:items-center"
            >
              Style:
            </p>
          </div>
          <div
            class="w-fit flex flex-row justify-center space-x-4 items-center"
          >
            <button class="btn-product hover-pink">Traditional</button>
            <button class="btn-product hover-pink">Gluten-free</button>
            <button class="btn-product hover-pink">Vegan</button>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col justify-between mt-10">
        <div class="flex flex-row justify-evenly space-x-20">
          <div class="flex flex-row">
            <p
              class="text-[#191514] font-['New_Spirit'] text-xl mt-0 ml-3 md:text-2xl md:mr-12"
            >
              Box:
            </p>
          </div>
          <p
            class="text-[#191514] font-['New_Spirit'] text-xl font-bold m-0 flex flex-row md:text-2xl"
          >
            + 500 HUF
          </p>
        </div>
        <div class="flex flex-row justify-evenly space-x-20 mt-5">
          <p
            class="text-[#191514] font-['New_Spirit'] text-xl mt-0 ml-3 md:text-2xl md:ml-5"
          >
            Sub-total:
          </p>
          <p
            id="subtotal"
            class="text-[#191514] font-['New_Spirit'] text-xl m-0 flex flex-row font-bold md:text-2xl md:ml-5"
          >
          0
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="btn w-32" @click="handleAddToCart(product)"> Add to Cart </button>
      </div>

      <div class="w-full flex flex-col justify-between mt-5">
        <div class="w-full flex justify-center mt-10">
          <p class="w-fit h-[50px] h2-brown lg:hidden flex m-0">Ingredients:</p>
        </div>
        <div
          class="w-fit flex flex-row justify-center space-x-4 items-center md:w-full"
        >
          <p class="text-lg m-0 p-black md:w-[75vw]">
            <a href="#" class="underline">flour</a> -
            <a href="#" class="underline">egg</a> - sugar -
            <a href="#" class="underline">almond flour</a> - margarine - sugar -
            apple - cinnamon - white chocolate - baking powder -
            <a href="#" class="underline text-brown-600 hover:text-brown-800"
              >cream</a
            >
          </p>
        </div>
        <div class="w-full flex justify-center mt-10">
          <p class="w-fit h-[50px] h2-brown lg:hidden flex m-0">
            Product Description:
          </p>
        </div>
        <div
          v-html="product.short_description"
          class="description-wrapper-mobile w-[50%] m-0 lg:hidden"
        ></div>
        <div
          v-html="product.short_description"
          class="description-wrapper-md hidden w-[75%] flex-row justify-center items-center m-0"
        ></div>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Loading...</p>
  </div>
  
</template>

<script setup>
const { product, variations } = defineProps(['product', 'variations']);
console.log(product, variations);

const { addToCart } = useCart();

const smallMenu = [];
const mediumMenu = [];
const largeMenu = [];

const showAlert = ref(false);

const handleAddToCart = (product) => {
  addToCart(product)
  showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 2000);
};

const showMenu = ref(true);
const showMenuTwo = ref(false);
const showMenuThree = ref(false);


variations.forEach((variation) => {
  if (variation.name.includes("8 Slices")) {
    smallMenu.push(variation);
  } else if (variation.name.includes("14 Slices")) {
    mediumMenu.push(variation);
  } else if (variation.name.includes("20 Slices")) {
    largeMenu.push(variation);
  }
});

smallMenu.reverse();
mediumMenu.reverse();
largeMenu.reverse();

const ToggleMenu = (id) => {
  if (id === 1) {
    showMenuTwo.value = false;
    showMenuThree.value = false;
    showMenu.value = !showMenu.value;
  } else if (id === 2) {
    showMenu.value = false;
    showMenuThree.value = false;
    showMenuTwo.value = !showMenuTwo.value;
  } else if (id === 3) {
    showMenu.value = false;
    showMenuTwo.value = false;
    showMenuThree.value = !showMenuThree.value;
  }
};

const splitName = (name) => {
  return (name = name.split(", "));
};

const calculateSubtotal = (variationValue) => {
  document.getElementById("subtotal").innerHTML = variationValue + 500;
};
</script>

<style>
/*The dynamically added data using v-html caused 
the description p tag to be unreachable by tailwind so we have to use some basic css to reach it*/
.short-description-wrapper p {
  color: hsl(12, 11%, 9%);
  font-size: 1.5rem;
}

.description-wrapper-mobile p {
  color: hsl(12, 11%, 9%);
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  width: 95vw;
}

.description-wrapper-md p {
  color: hsl(12, 11%, 9%);
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0;
  width: 85vw;
}

.ingredients p {
  color: hsl(12, 11%, 9%);
  font-size: 1rem;
  margin-top: 0;
  font-weight: bold;
  width: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
