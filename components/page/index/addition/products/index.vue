<template>
    <div class="overflow-y-auto overflow-x-hidden w-full p-2 flex flex-col items-start"
        style="height: calc(100vh - 268px);">
        <ProductItem v-for="(product, index) in productList" :key="index" :product="product"
            :isActive="saleStore.selectedProduct?.id == product.id" @click="selectedIndex = index" :index="index" />
    </div>
</template>

<script setup>
import ProductItem from './product-item.vue';
const saleStore = useSaleStore();
const productList = [
    { id: "0",title: 'Yumurtalı Noodle', price: '₺25,00', quantity: 5, code: "8734863896732896236" },
    { id: "1",title: 'Spagetti Ekmek', price: '₺225,00', quantity: 5, code: '8364' },
    { id: "2",title: 'Kaburga Yemeği', price: '₺125,00', quantity: 3, code: '9683468' },
    { id: "3",title: 'Prenses Tatlısı', price: '₺45,00', quantity: 1, code: '911124' },
];

</script>

<style lang="scss" scoped></style>