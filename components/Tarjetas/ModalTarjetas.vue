<script setup>
const props = defineProps({
    modalActivo: {
        type: [Boolean],
    },
    datosModal: {
        type: [Object]
    }
});
</script>

<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
        <div class="bg-white w-2/4 h-2/4 flex flex-col rounded-2xl shadow p-[20px]">
            <i class="fa-solid fa-close relative top-0 left-full" @click="modalActivo = false"></i>
            <h2 class="text-2xl text-center">Titulo Modal</h2>
            <div class="flex flex-col items-center gap-[10px]">
                <h4>Laptop HP 245 G8</h4>
                <div class="flex gap-5">
                    <p class="text-lg">Almacen 1</p>
                    <p>Cantidad : {{ 0 }}</p>
                </div>
                <div class="flex gap-5">
                    <p>Almacen 1</p>
                    <p>Cantidad : {{ 0 }}</p>
                </div>
                <div class="flex gap-5">
                    <p>Almacen 1</p>
                    <p>Cantidad : {{ 0 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>