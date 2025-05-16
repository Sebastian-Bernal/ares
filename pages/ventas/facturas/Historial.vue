<template>
    <div class="section-table bg-gray-100">
        
        <div class="flex w-[100%] justify-between items-cent px-10 mt-5 md:flex-row flex-col gap-3">
            <h1 class="font-bold text-2xl text-black">Historial de ventas</h1>
            <InputBgGray placeholder="Filtrar por productos..." icon="fa-search" class="md:w-[60%]"/>
        </div>

        <div class="containerTable">
            <div class="table">
                <div class="headTable p-2 grid grid-cols-[100px_1fr_1fr_1fr_1fr] grid-rows-1 text-xl font-bold" :class="tamaños">
                    <h2 class="3-col flex gap-2 items-center justify-center">Id <i class="fa-solid fa-caret-down"></i></h2>
                    <h2 class="3-col flex gap-2 items-center justify-center">Producto <i class="fa-solid fa-caret-down"></i></h2>
                    <h2 class="3-col flex gap-2 items-center justify-center">Cliente <i class="fa-solid fa-caret-down"></i></h2>
                    <h2 class="3-col flex gap-2 items-center justify-center">Fecha <i class="fa-solid fa-caret-down"></i></h2>
                    <h2 class="3-col flex gap-2 items-center justify-center">Acciones</h2>
                </div>
                <hr class="dark">
                <div v-for="row in 10" class="bodyTable grid grid-rows-1 p-2 hover:bg-gray-300" :class="tamaños">
                    <p>1</p>
                    <p>Moto</p>
                    <p>Camilo</p>
                    <p>12/07</p>
                    <p class="flex gap-2 items-center justify-center">
                        <i class="fa-solid fa-pencil hover:text-red-400"></i>
                        <i class="fa-solid fa-trash hover:text-red-400"></i>
                    </p>
                </div>
            </div>
        </div>
        
        <div class="paginador">
            <!-- <p class="text-sm justify-self-start">5 filas</p> -->
            <div class="btnsPagina">
                <button class="text-l bg-gray-300 p-2">
                    <i class="fa-solid fa-caret-left"></i>
                </button>
                <div class="flex gap-2">
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                </div>
                <button class="text-l bg-gray-300 p-2">
                    <i class="fa-solid fa-caret-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import InputBgGray from '~/components/Inputs/InputBgGray.vue';

const tamaños = `grid-cols-[${primero}_${segundo}_${segundo}_${segundo}_${segundo}]`;
const primero = '100px';
const segundo = '1fr';
</script>

<style scoped>
.section-table{
    border-radius: 16px;
    padding: 10px 0;
    width: 100%;
    height: 100%;
}

.containerTable {
    margin: 20px;
    height: 50vh;
    padding: 0 2%;
    overflow-y: scroll;
}

.containerTable::-webkit-scrollbar {
    display: none;
}

.headTable {
    background-color: var(--color-gray-400);
    border-radius: 10px 10px 0 0;
    text-align: center;
}

.bodyTable {
    text-align: center;
}

.bodyTable:nth-child(even) {
    background-color: var(--color-gray-200);
}

.bodyTable:hover:nth-child(even) {
    background-color: var(--color-gray-300);
}

.table {
    width: 100%;
}

.paginador {
    margin: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    color: #000000;
}

.btnsPagina {
    display: flex;
    align-items: center;
    gap: 20px;
}

.btnsPagina button{
    border-radius: 50%;
}

.btnsPagina button:hover{
    background-color: var(--color-gray-400);
}

.btnsPagina button i{
    width: 14px;
    height: 14px;
}
</style>