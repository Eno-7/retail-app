<template>
    <div class="product-grid overflow-y-auto mt-4">
        <ProductCard v-for="(product, index) in saleStore.products" :product="product" :key="index" />
    </div>
</template>

<script setup>
import ProductCard from "./product-card.vue";
const saleStore = useSaleStore();
</script>

<style lang="scss" scoped>
.product-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}
</style>