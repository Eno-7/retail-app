<template>
    <div class="w-full flex items-center justify-between border-b border-b-gray-100 p-2">
        <AddCustomerButton />

        <div class="flex items-center  gap-3">
            <UserButton />
            <DeleteButton />
        </div>
    </div>
</template>

<script setup>
import AddCustomerButton from "./add-customer-button.vue";
import UserButton from "./user-button.vue";
import DeleteButton from "./delete-button.vue";
</script>

<style lang="scss" scoped></style>