<template>
    <div class="h-[130px] w-full bg-primary-theme p-2.5">
        <div class="w-full h-full flex items-center justify-between">
            <div class="flex flex-col items-start flex-[0.55] gap-2">
                <ListItem title="Adet" value="2" with-opacity />
                <ListItem title="İndirim" value="₺0.00" with-opacity />
                <ListItem title="KDV" value="₺25,00" with-opacity />
            </div>
            <div class="w-max">
                <ListItem title="TOPLAM" value="₺225,00" size="lg" valueSize="2xl" direction="col" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ListItem from "./list-item.vue";
</script>

<style lang="scss" scoped></style>