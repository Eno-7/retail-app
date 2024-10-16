<template>
    <div class="border-l border-l-[#eee] bg-white border-t border-t-gray-100 flex items-start justify-between flex-col w-[450px]"
        style="height: calc(100vh - 65px);">
        <TopBar />
        <Products />
        <AdditionInfoCard />
    </div>
</template>

<script setup>
import TopBar from "./top-bar/index.vue";
import Products from "./products/index.vue";
import AdditionInfoCard from "./addition-info-card/index.vue";
</script>

<style lang="scss" scoped></style>