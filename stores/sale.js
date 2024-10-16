import { defineStore } from "pinia";

export const useSaleStore = defineStore('sale', () => {
  const selectedProduct = ref(null);
  const isSelectedProduct = computed(() => selectedProduct.value !== null);

  const products = ref([]);

  const selectProduct = (product) => {
    if (selectedProduct.value?.id == product.id) {
      selectedProduct.value = null;
    } else {
      selectedProduct.value = product;
    }
  }


  return {
    selectedProduct,
    selectProduct,
    isSelectedProduct
  }
});