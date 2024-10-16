<template>
    <div class="w-[400px] flex-shrink">
        <div>
            <div class="bg-white p-3 flex items-center justify-center gap-2 rounded-md h-[55px]">
                <Icon name="tabler:barcode" class="flex-shrink-0" size="20px" />
                <input ref="barcodeInputRef" type="text" placeholder="Barkod giriniz"
                    class="outline-none w-full text-sm">
                <Icon name="tabler:search" class="flex-shrink-0" size="20px" />
            </div>
        </div>

        <div class="grid grid-cols-4 gap-2 mt-4">
            <button :class="['bg-[#bfc4cb]', buttonClasses]">7</button>
            <button :class="['bg-[#bfc4cb]', buttonClasses]">8</button>
            <button :class="['bg-[#bfc4cb]', buttonClasses]">9</button>
            <button :class="['bg-[#8b9a9d]', buttonClasses]">
                <Icon name="gg:arrow-left-o" class="text-black" />
            </button>

            <button :class="['bg-[#bfc4cb]', buttonClasses]">4</button>
            <button :class="['bg-[#bfc4cb]', buttonClasses]">5</button>
            <button :class="['bg-[#bfc4cb]', buttonClasses]">6</button>
            <button :class="['bg-[#8b9a9d]', buttonClasses]">Sil</button>

            <button :class="['bg-[#bfc4cb]', buttonClasses]">1</button>
            <button :class="['bg-[#bfc4cb]', buttonClasses]">2</button>
            <button :class="['bg-[#bfc4cb]', buttonClasses]">3</button>

            <button :class="[okButtonClasses, 'row-span-2']">OK</button>

            <button :class="['bg-[#bfc4cb]', buttonClasses]">0</button>
            <button :class="['bg-[#bfc4cb]', buttonClasses]">*</button>
            <button :class="['bg-[#bfc4cb]', buttonClasses]">,</button>
        </div>

    </div>
</template>

<script setup>
const buttonClasses = "h-[60px] text-2xl cursor-pointer rounded-md flex justify-center items-center";
const okButtonClasses = "bg-[#8b9a9d] h-[140px] text-2xl cursor-pointer rounded-md flex justify-center items-center";

const barcodeInputRef = ref(null);

onMounted(() => {
    barcodeInputRef.value.focus();
});
</script>

<style lang="scss" scoped></style>