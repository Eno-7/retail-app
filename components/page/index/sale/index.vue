<template>
    <div class="p-2 flex flex-col justify-between" style="width: calc(100vw - 550px); height: calc(100vh - 65px)">
        <div class="h-[360px]">
            <Categories />
            <ProductList />
        </div>

        <BottomBar />
    </div>
</template>

<script setup>
import Categories from "./categories/index.vue";
import ProductList from "./product-list/index.vue";
import BottomBar from "./bottom-bar/index.vue";



</script>

<style lang="scss" scoped></style>