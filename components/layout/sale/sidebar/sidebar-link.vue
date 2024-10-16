<template>
    <div :class="linkClasses">
        <Icon :name="icon" :size="iconSize ?? 27" :class="tintColor" />
        <h1 :class="['text-center text-xs',tintColor]">{{ title }}</h1>
    </div>
</template>

<script setup>
const props = defineProps(['is-active', 'icon', 'title', 'icon-size']);


const tintColor = computed(() => {
    if (props.isActive) return 'text-primary-900';
    else return 'text-gray-200';
});

const linkClasses = computed(() => {
    const defaultClasses = 'flex flex-col items-center justify-center w-full h-[75px] gap-1 cursor-pointer rounded-md';
    const activeClasses = {
        'bg-primary-800 border-2 border-primary-900': props.isActive
    };
    return [defaultClasses, activeClasses];
});
</script>

<style lang="scss" scoped></style>