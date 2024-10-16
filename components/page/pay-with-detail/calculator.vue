<template>
    <div class="w-full h-full">
        <div class="w-full flex-shrink flex items-end gap-3">

            <div class="flex flex-col items-center justify-center w-max gap-2">
                <button class="w-[55px] h-[57.3px] rounded-md bg-white" v-for="(n, i) in 6" :key="i">
                    <span class="text-black">
                        {{ n * 6 }}
                    </span>
                </button>
            </div>

            <div class="grid grid-cols-3 gap-2 mt-4 w-full">
                <button :class="buttonClasses">1</button>
                <button :class="buttonClasses">2</button>
                <button :class="buttonClasses">3</button>

                <button :class="buttonClasses">4</button>
                <button :class="buttonClasses">5</button>
                <button :class="buttonClasses">6</button>

                <button :class="buttonClasses">7</button>
                <button :class="buttonClasses">8</button>
                <button :class="buttonClasses">9</button>

                <button :class="buttonClasses">,</button>
                <button :class="buttonClasses">0</button>
                <button :class="buttonClasses">Sil</button>
            </div>

        </div>

        <div class="grid grid-cols-12 mt-3 gap-3">
            <div class="col-span-4">
                <NuxtLink to="/">
                    <button class="rounded-md bg-yellow-theme flex items-center justify-center w-full h-[70px] gap-3">
                        <Icon name="mdi:arrow-left-bold-circle-outline" size="30px" class="text-white" />
                        <span class="text-xl text-white"> Geri </span>
                    </button>
                </NuxtLink>
            </div>
            <div class="col-span-8">
                <button class="rounded-md bg-green-theme flex items-center justify-center w-full h-[70px] gap-3">
                    <Icon name="mdi:shopping" size="30px" class="text-white" />
                    <span class="text-xl text-white"> Satışı Tamamla </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const buttonClasses = "bg-white h-[90px] text-2xl cursor-pointer rounded-md flex justify-center items-center";
const okButtonClasses = "bg-white h-[150px] text-2xl cursor-pointer rounded-md flex justify-center items-center";
</script>

<style lang="scss" scoped></style>