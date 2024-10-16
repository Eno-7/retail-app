<template>
    <div class="flex flex-col items-start" style="width: calc(100% - 400px); height: 347px;">
        <div class="grid grid-cols-3 gap-2 w-full">
            <button v-for="(n, i) in 6" :key="i" class="bg-white rounded-md w-full p-4 h-[70px]">
                <span class="text-xl">{{ i * 5 }}</span>
            </button>
        </div>
        <div class="grid grid-cols-2 w-full mt-5 gap-2">
            <button class="text-white bg-[#3a9746] rounded-md w-full h-[85px]">NAKİT</button>
            <button style="background-color: purple;" class="text-white w-full h-[85px]">KREDİ KARTI</button>
            <button style="background-color: gray;" class="text-white w-full h-[85px]">Diğer</button>
            <NuxtLink to="/detayli-odeme">
                <button style="background-color: red;" class="text-white w-full h-[85px]">
                    Detaylı Ödeme
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>