<script setup>
import { tarjetaInfo } from '../../data/tarjeta';
import Tarjeta from '../../components/Tarjetas/Tarjeta.vue'
</script>
<template>
    <div class="containerTarjetas w-full h-full rounded-2xl py-2 overflow-auto">
        <h1 class="font-bold text-2xl mb-10 mx-[20px]">Bienvenido pagina de Inicio</h1>
        <Tarjeta :contenido="tarjetaInfo"/>
    </div>
</template>

<style scoped>
.containerTarjetas::-webkit-scrollbar {
    display: none;
}
</style>
