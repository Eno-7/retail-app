<template>
    <div class="relative group">
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperGrid]" :slides-per-view="5" :space-between="20"
            :loop="true" :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
            }" :grid="{
                rows: 1,
                fill: 'row',
            }" @swiper="onSwiper">
            <SwiperSlide v-for="(category, index) in saleCategories" :key="index">
                <CategoryItem :category="category" :is-selected="selectedCategory == category.id"
                    @click="onSelectCategory(category.id)" />
            </SwiperSlide>
        </Swiper>

        <div class="transition-all absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <button
                class="drop-shadow-md bg-white flex items-center justify-center text-xl text-black font-bold w-[40px] h-[40px] rounded-full transition-transform duration-300"
                @click="goPrev">
                <Icon name="tabler:chevron-left" />
            </button>
        </div>

        <div class="transition-all absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
            <button
                class="drop-shadow-md bg-white flex items-center justify-center text-xl text-black font-bold w-[40px] h-[40px] rounded-full transition-transform duration-300"
                @click="goNext">
                <Icon name="tabler:chevron-right" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { saleCategories } from '~/constants/data';
import CategoryItem from './category-item.vue';
const selectedCategory = ref(null);
const saleStore = useSaleStore();

const onSelectCategory = (categoryId) => {
    selectedCategory.value = categoryId;
    const foundCategory = saleCategories.find((e) => e.id === categoryId);
    if (!foundCategory) return;


    saleStore.products = foundCategory.products;
}

let swiperInstance = null;

const onSwiper = (swiper) => {
    swiperInstance = swiper;
};

const goPrev = () => {
    if (swiperInstance) {
        swiperInstance.slidePrev();
    }
};

const goNext = () => {
    if (swiperInstance) {
        swiperInstance.slideNext();
    }
};
</script>

<style lang="scss" scoped>
.category-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
}
</style>
