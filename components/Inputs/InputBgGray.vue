<template>
    <div class="relative">
    <label>{{ label }}</label>
    <input :placeholder="placeholder" class="inputFondo" v-model="buscar"/>
    <i class="fa-solid iconInput text-gray-600" :class="icon"></i>
    </div>
</template>

<script setup>
defineProps(['label','placeholder','icon','color']);

</script>

<style scoped>
.inputFondo {
    padding: 5px 10px 5px 35px;
    border-radius: 10px;
    width: 100%;
    background-color: var(--color-gray-200);
}

.iconInput {
    position: absolute;
    left: 10px;
    top: 47.5%;
    transform: translateY(-50%);
}
</style>