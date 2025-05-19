<template>
    <div class="section-table">

        <div class="flex w-[100%] justify-between items-cent px-10 mt-5 md:flex-row flex-col gap-3">
            <h1 class="font-bold text-2xl tituloTabla">{{ datosTabla.nombre }}</h1>
            <div class="flex gap-3 w-[50%] justify-end">
                <InputBgGray placeholder="Filtrar por productos..." icon="fa-search"/>
                <div class="flex gap-1 items-center">
                    <button class="btnAgregar"><i class="fa-solid fa-plus"></i></button>
                    <h4>Agregar</h4>
                </div>
            </div>
        </div>
        <Tabla :datos="tabla"/>
        <Paginador/>
    </div>
</template>

<script setup>
import InputBgGray from '~/components/Inputs/InputBgGray.vue';
import Tabla from '~/components/Tables/Tabla.vue';
import Paginador from '~/components/Tables/Paginador.vue';
import { datosTabla } from '~/data/TablaVenta';

const tabla = datosTabla.datos;
console.log(tabla);

const tamaños = `grid-cols-[${primero}_${segundo}_${segundo}_${segundo}_${segundo}]`;
const primero = '100px';
const segundo = '1fr';
</script>

<style scoped>
.section-table {
    border-radius: 16px;
    padding: 10px 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-blanco);
}

.containerTable {
    margin: 20px;
    height: 50vh;
    overflow-y: scroll;
}

.containerTable::-webkit-scrollbar {
    display: none;
}

.tituloTabla {
    color: var(--color-rojo);
    text-shadow: 5px 5px 4px var(--color-gris);
}

.btnAgregar {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--color-rojo-claro-trp5);
}
</style>