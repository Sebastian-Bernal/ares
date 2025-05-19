<template>
    <div class="containerTable">
        <div class="table">
            <div class="headTable grid-cols-[100px_1fr_1fr_1fr] p-2 grid grid-rows-1 text-xs font-bold"
                :class="`grid-cols-[${primero}_${segundo}_${segundo}_${segundo}_${segundo}]`">
                <h2>Id</h2>
                <h2>Producto</h2>
                <h2>Cliente</h2>
                <h2>Fecha</h2>
                <h2>Acciones</h2>
            </div>
            <hr class="horizontal mt-2">
            <div v-for="data in datos" class="bodyTable grid grid-rows-1 p-2" :class="tamaños">
                <p>{{ data.id }}</p>
                <p>{{ data.Nombre }}</p>
                <p>{{ data.Cliente }}</p>
                <p>{{ data.Fecha }}</p>
                <p class="flex gap-2 items-center justify-center accionesTabla">
                <div v-for="action in data.Acciones">
                    <i v-if="action === 'ver'" class="fa-solid fa-eye"></i>
                    <i v-else-if="action === 'actualizar'" class="fa-solid fa-pencil"></i>
                    <i v-else-if="action === 'borrar'" class="fa-solid fa-trash"></i>
                </div>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps('datos');
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

.accionesTabla i:hover {
    color: var(--color-verde);
}

.horizontal {
    margin: .75rem 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
}
</style>