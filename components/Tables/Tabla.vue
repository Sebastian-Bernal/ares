<template>
    <div class="containerTable">
        <div class="table">
            <div class="headTable grid-cols-[100px_1fr_1fr_1fr_1fr] p-2 grid grid-rows-1 text-xs font-bold text-wrap">
                <h2>Id <i class="fa-solid fa-caret-down"></i></h2>
                <h2>Producto <i class="fa-solid fa-caret-down"></i></h2>
                <h2>Cliente <i class="fa-solid fa-caret-down"></i></h2>
                <h2>Fecha <i class="fa-solid fa-caret-down"></i></h2>
                <h2>Acciones</h2>
            </div>
            <hr class="horizontal mt-2">
            <div v-for="data in datosFiltrados" class="bodyTable grid grid-cols-[100px_1fr_1fr_1fr_1fr] grid-rows-1 p-2">
                <p>{{ data.id }}</p>
                <p>{{ data.Nombre }}</p>
                <p>{{ data.Cliente }}</p>
                <p>{{ data.Fecha }}</p>
                <div class="flex items-center justify-center accionesTabla text-center gap-2">
                <p v-for="action in data.Acciones" class="inline">
                    <i v-if="action === 'ver'" class="fa-solid fa-eye btnActions bg-sky-600 text-xs"></i>
                    <i v-else-if="action === 'actualizar'" class="fa-solid fa-pencil btnActions bg-[var(--color-naranja)] text-xs"></i>
                    <i v-else-if="action === 'borrar'" class="fa-solid fa-trash btnActions bg-red-600 text-xs"></i>
                </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePaginador } from '../../stores/paginador';
const paginador = usePaginador();

const datosFiltrados = computed(() => paginador.datosPaginados);

const tamaños = `grid-cols-[${primero}_${segundo}_${segundo}_${segundo}_${segundo}]`;
const primero = '100px';
const segundo = '1fr';
</script>

<style scoped>
.headTable {
    border-radius: 10px 10px 0 0;
    text-align: center;
    color: var(--color-naranja);
}

.headTable h2 i:hover {
    color: var(--color-rojo-suave);
}

.bodyTable {
    text-align: center;
}

.bodyTable:nth-child(even) {
    background-color: var(--color-rojo-claro-trp5);
}

.bodyTable:hover:nth-child(even) {
    background-color: var(--color-gris);
}

.bodyTable:hover {
    background-color: var(--color-gris);
}

.table {
    width: 100%;
}

.horizontal {
    color: var(--color-gris);
}

.btnActions {
    float: left;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    padding: .40rem;
    margin: 0;
    border-radius: 50%;
}

.btnActions:hover {
    opacity: .7;
}
</style>