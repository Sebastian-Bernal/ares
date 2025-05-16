<template>
    <div class="containerTable">
        <div class="table">
            <div class="headTable p-2 grid grid-rows-1 text-xl font-bold"
                :class="`grid-cols-[${primero}_${segundo}_${segundo}_${segundo}]`">
                <h2 class="3-col">Id</h2>
                <h2 class="3-col">Producto</h2>
                <h2 class="3-col">Cliente</h2>
                <h2 class="3-col">Fecha</h2>
            </div>
            <hr class="dark">
            <div v-for="row in 10" class="bodyTable grid grid-rows-1 p-2 hover:bg-gray-300" :class="tamaños">
                <p>1</p>
                <p>Moto</p>
                <p>Camilo</p>
                <p>12/07</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps('tamaño');
const tamaños = `grid-cols-[${primero}_${segundo}_${segundo}_${segundo}]`;
const primero = '100px';
const segundo = '1fr';
</script>