<template>
    <div :class="['flex items-start flex-shrink-0 flex-col cursor-pointer justify-center w-full select-none p-4 border-2 rounded-md', {
        'border-primary-900 bg-primary-800': isSelected,
        'border-white bg-white': !isSelected,
    }]">
        <h1 class="text-lg font-medium">{{ category.title }}</h1>
        <span class="text-sm">Stokta {{category.stock}} Adet</span>
    </div>
</template>

<script setup>
defineProps(['category','isSelected'])
</script>

<style lang="scss" scoped></style>