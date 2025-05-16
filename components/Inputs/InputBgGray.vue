<template>
    <div class="relative">
    <label>{{ label }}</label>
    <input :placeholder="placeholder" class="inputFondo bg-gray-300"/>
    <i class="fa-solid iconInput text-gray-500" :class="icon"></i>
    </div>
</template>

<script setup>
defineProps(['label','placeholder','icon','color']);

</script>

<style scoped>
.inputFondo {
    padding: 5px 10px 5px 25px;
    border-radius: 10px;
    width: 100%;
    color: #494949;
}

.iconInput {
    position: absolute;
    left: 5px;
    top: 45%;
    transform: translateY(-50%);
}
</style>