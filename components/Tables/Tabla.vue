<template>
    <div class="containerTable">
        <div class="table">
            <div class="headTable grid p-2 text-xs font-bold text-wrap" :class="`grid-cols-${totalCols}`">
                <h2 v-for="col in columnas" :class="col.class">
                    {{ col.header }} 
                    <i v-if="col.action" class="fa-solid fa-caret-down"></i>
                </h2>
                <h2 v-if="acciones?.action" :class="acciones.class">Acciones</h2>
            </div>

            <hr class="horizontal mt-2">

            <div v-for="(data, i) in datos.content" class="bodyTable grid p-2" :class="`grid-cols-${totalCols}`">

                <div v-for="(col,i) in columnas" :class="col.class">
                    <a v-if="col.link_url" :href="col.link_url" class="underline text-sky-900">
                        {{ data[col.header] }}</a>
                    <p v-else>{{ data[col.header] }}</p>
                </div>
                
                <div v-if="acciones.action" class="flex items-center justify-center accionesTabla text-center gap-2"
                    :class="acciones.class">
                    <p v-for="action in acciones.icons" class="inline">
                        <i v-if="action === 'ver'" class="fa-solid fa-eye btnActions bg-sky-600 text-xs"></i>
                        <i v-else-if="action === 'actualizar'"
                            class="fa-solid fa-pencil btnActions bg-[var(--color-naranja)] text-xs"></i>
                        <i v-else-if="action === 'borrar'" class="fa-solid fa-trash btnActions bg-red-600 text-xs"></i>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    columnas: {
        type: [Array, String],
        required: true,
        default: ''
    },
    acciones: {
        type: [Object, String],
        default: ''
    },
    datos: {
        type: [Object],
        dafault: []
    }
});

const totalCols = computed(() => {
    const baseCols = props.columnas.length
    return props.acciones?.action ? baseCols + 1 : baseCols
});

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