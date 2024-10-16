<template>
    <div>
        <Navbar />
        <div class="flex items-start">
            <!-- Sidebar: w-[90px] -->
            <Sidebar />
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import Navbar from "./navbar/index.vue";
import Sidebar from "./sidebar/index.vue";
</script>

<style lang="scss" scoped></style>