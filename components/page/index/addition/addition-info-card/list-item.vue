<template>
    <div :class="['flex justify-between w-full',
        { 'flex-row items-center': direction == 'row' },
        { 'flex-col items-end': direction == 'col' },
    ]">
        <h1 :class="['text-white', {
            'text-lg': size === 'lg',
            'text-base': size === 'sm',
            'opacity-80': withOpacity
        }]">{{ title }}</h1>
        <span :class="['text-white', {
            'text-4xl': valueSize == '2xl',
            'text-base': size === 'sm',
        }]">{{ value }}</span>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    withOpacity: {
        type: Boolean,
        required: false,
    },
    value: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: false,
        default: 'sm'
    },
    valueSize: {
        type: String,
        required: false,
        default: null
    },
    direction: {
        type: String,
        default: "row"
    }
})
</script>

<style lang="scss" scoped></style>