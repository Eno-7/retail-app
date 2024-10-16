<template>
    <div class="w-[100px] bg-white border-r border-r-bg py-3 px-2" style="height: calc(100vh - 65px);">
        <template v-if="saleStore.isSelectedProduct">
            <SidebarLink v-for="(sidebarLink, index) in productSidebarLinks" :key="index" :title="sidebarLink.title"
                :icon="sidebarLink.icon" />
        </template>
        <template v-else>
            <SidebarLink v-for="(sidebarLink, index) in sidebarLinks" :key="index" :title="sidebarLink.title"
                :icon="sidebarLink.icon" :is-active="index == 0" />
        </template>
    </div>
</template>

<script setup>
import SidebarLink from './sidebar-link.vue';
import { useSaleStore } from '~/stores/sale';
const saleStore = useSaleStore();

const sidebarLinks = [
    { title: "Anasayfa", icon: "ri:home-6-line" },
    { title: "Müşteriler", icon: "flowbite:users-group-solid" },
    { title: "Masalar", icon: "tabler:table-shortcut" },
    { title: "Kasiyer", icon: "hugeicons:cashier" },
    { title: "Siparişler", icon: "mdi:shopping-outline" },
    { title: "Raporlar", icon: "akar-icons:statistic-down" },
    { title: "Ayarlar", icon: "solar:settings-linear" },
];
const productSidebarLinks = [
    { title: "Ürün Sil", icon: "mdi:delete-outline" },
    { title: "İndirim", icon: "tabler:discount" },
    { title: "Açıklama", icon: "fluent:text-description-16-filled" },
    { title: "Miktar Değişim", icon: "mingcute:transformation-fill" },
    { title: "Fiyat Değişim", icon: "bi:currency-exchange" },
    { title: "Ürün Düzenle", icon: "fluent:box-edit-20-regular" },
];
</script>

<style lang="scss" scoped></style>