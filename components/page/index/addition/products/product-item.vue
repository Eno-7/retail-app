<template>
    <div @click="saleStore.selectProduct(product)" :class="['p-2 cursor-pointer w-full select-none rounded-md h-[90px] relative border-b border-b-gray-100',
        {
            'bg-bg': isActive,
        }
    ]">
        <div class="flex items-start justify-between">
            <div class="flex items-start flex-col w-full">
                <h1 class="text-sm font-medium">{{ product.title }}</h1>
                <h1 class="text-xs text-gray-200">{{ product.code }}</h1>

                <div class="flex items-center justify-between w-full">
                    <h3 class="text-sm font-medium">{{ product.quantity }} Adet</h3>
                    <h3 class="text-xl font-medium">{{ product.price }}</h3>
                </div>
            </div>

        </div>


    </div>
</template>

<script setup>
defineProps(['product', 'isActive', 'index']);
const productCard = ref(null)
import { useSaleStore } from '~/stores/sale';

const  saleStore = useSaleStore();

</script>

<style lang="scss" scoped></style>