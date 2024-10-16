<template>
    <div class="product-card bg-white w-full h-max rounded-md flex flex-col p-2">
        <h1 class="text-sm">{{ product.title }}</h1>
        <p class="text-xs text-gray-200">{{ Math.floor(Math.random() * 2384523) }}</p>
        <h3 class="text-xs font-bold mt-3">₺{{ product.price }}</h3>
    </div>
</template>

<script setup>
defineProps(['product']);
</script>

<style lang="scss" scoped>
.product-card {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>