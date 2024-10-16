<template>
    <div class="bg-white border-b border-b-gray-100 w-full h-[65px] flex items-center justify-between px-5">
        <div class="w-auto flex items-center h-full flex-1 gap-5">
            <Brand />
            <SearchInput />
        </div>


        <div class="flex items-center w-max justify-end h-full gap-4">
            <RefreshButton />
            <WifiStatusButton />
            <SelectTableButton />
        </div>

    </div>
</template>

<script setup>
import Brand from "./brand.vue";
import SearchInput from "./search-input/index.vue";
import RefreshButton from "./right-actions/refresh-button.vue";
import WifiStatusButton from "./right-actions/wifi-status-button.vue";
import SelectTableButton from "./right-actions/select-table-button.vue";
</script>

<style lang="scss" scoped></style>