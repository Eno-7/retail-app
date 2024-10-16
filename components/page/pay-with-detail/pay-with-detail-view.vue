<template>
    <div class="flex items-start">
        <Addition />
        <div class="p-2" style="width: calc(100vw - 550px); height: calc(100vh - 65px)">
            <div class="flex flex-col justify-between w-full h-full">
                <div class="grid grid-cols-12 w-full h-full gap-3">
                    <div class="col-span-7 flex items-start flex-col h-full justify-between">
                        <div class="w-full">
                            <h1 class="text-gray-200">Detaylı Ödeme</h1>

                            <div class="flex items-center justify-between w-full">
                                <h1 class="text-4xl">Tutar</h1>
                                <h1 class="text-4xl">₺38,91</h1>
                            </div>
                        </div>

                        <div class="w-full">
                            <Calculator />
                        </div>
                    </div>
                    <div class="col-span-5 w-full h-full">
                        <div class="grid grid-cols-2 gap-3 w-full h-full">
                            <button class="text-2xl text-white w-full h-full bg-purple rounded-md">Nakit</button>
                            <button class="text-2xl text-white w-full h-full bg-primary-theme rounded-md">Kredi Kartı</button>
                            <button class="text-2xl w-full h-full bg-white rounded-md">%10 İndirim</button>
                            <button class="text-2xl w-full h-full bg-white rounded-md">Personel İndirimi</button>
                            <button class="text-2xl w-full h-full bg-white rounded-md">MULTINET</button>
                            <button class="text-2xl w-full h-full bg-white rounded-md">VERESİYE</button>
                            <button class="text-2xl w-full h-full bg-white rounded-md">YAZDIR</button>
                            <NuxtLink to="/">
                                <button class="text-2xl text-white w-full h-full bg-green-theme rounded-md">KAPAT</button>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import Addition from "@/components/page/index/addition/index.vue";
import Calculator from "./calculator.vue";
</script>

<style lang="scss" scoped></style>