<script setup>
import Paginador from './Paginador.vue';
import { defineProps, computed, ref } from 'vue';
const menorAMayor = ref(true);

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
        required: true,
        dafault: []
    }
});

// function sortedItems(key, data) {
//     if (menorAMayor.value) {
//         return data.sort((a, b) => {
//             if (typeof a[key] === 'number') {
//                 console.log(a[key] - b[key])
//                 return a[key] - b[key]
//             } else {
//                 return a[key].localeCompare(b[key])
//             }
//         })
//     } else {
//         return data.sort((a, b) => {
//             if (typeof a[key] === 'number') {
//                 return b[key] - a[key]
//             } else {
//                 return b[key].localeCompare(a[key])
//             }
//         })
//     }
//     const menorAMayor = !menorAMayor;
// }

// Paginador
const paginaActual = ref(1);
const itemsPorPagina = ref(10);

const ultimaPagina = computed(() => itemsPorPagina.value * paginaActual.value);

const cambiarItemsPorPagina = (value) => {
    itemsPorPagina = value;
    paginaActual = 1;
};

const siguientePagina = () => {
    if (paginaActual.value < totalPaginas) {
        paginaActual.value++;
    }
};

const paginaAnterior = () => {
    if (paginaActual.value > 1) {
        paginaActual.value--;
    }
};

const totalPaginas =  Math.ceil(props.datos.content.length / itemsPorPagina.value);

const datosFiltrados = computed(() => {
    const inicio = (paginaActual.value - 1) * itemsPorPagina.value;
    const fin = inicio + itemsPorPagina.value;
    return props.datos.content.slice(inicio, fin)
});

const totalCols = computed(() => {
    const baseCols = props.columnas.length
    return props.acciones?.action ? baseCols + 1 : baseCols
});

</script>

<template>
    <div class="section-tablas">
        
    <div class="containerTable">
        <div class="table">
            <div class="headTable grid p-2 text-xs font-bold text-wrap" :class="`grid-cols-${totalCols}`">
                <h2 v-for="col in columnas" :class="col.class">
                    {{ col.header }}
                    <i v-if="col.action" class="fa-solid fa-caret-down"
                        @click="sortedItems(col.key, props.datos.content)"></i>
                </h2>
                <h2 v-if="acciones?.action" :class="acciones.class">Acciones</h2>
            </div>

            <hr class="horizontal mt-2">

            <div v-for="(data, i) in datosFiltrados" class="bodyTable grid p-2" :class="`grid-cols-${totalCols}`">

                <div v-for="(col, i) in columnas" :class="col.class">
                    <a v-if="col.link_url" :href="col.link_url" class="underline text-sky-900">
                        {{ data[col.key] }}</a>
                    <p v-else>{{ data[col.key] }}</p>
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


    <div class="paginador px-10">
        <p class="text-sm text-gray-500">
            Registros {{ ultimaPagina - itemsPorPagina + 1 }} al {{ ultimaPagina }}</p>

        <div class="btnsPagina">
            <button class="text-l p-2 text-white" @click="paginaAnterior()">
                <i class="fa-solid fa-caret-left"></i>
            </button>
            <div class="flex gap-2 pagina">
                <h2 v-if="paginaActual > 1">{{ paginaActual - 1 }}</h2>
                <h2 class="bg-[var(--color-gray-200)] px-2 rounded">{{ paginaActual }}</h2>
                <h2 v-if="paginaActual < totalPaginas">{{ paginaActual + 1 }}</h2>
            </div>
            <button class="text-l p-2 text-white" @click="siguientePagina()">
                <i class="fa-solid fa-caret-right"></i>
            </button>
        </div>

        <div class="flex gap-2 items-center">
            <p class="text-sm text-gray-500">Número de registros</p>
            <select name="numRegistros" class="text-black bg-gray-200 rounded-xl p-1"
                v-model.number="itemsPorPagina">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </div>
    </div>
    </div>
</template>



<style scoped>
.section-tablas {
    height: 85%;
}

.containerTable {
    margin: 20px;
    height: 80%;
    overflow-y: scroll;
}

.containerTable::-webkit-scrollbar {
    display: none;
}

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


.paginador {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    color: var(--color--negro);
}

.btnsPagina {
    display: flex;
    align-items: center;
    gap: 20px;
}

.btnsPagina button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(to left, var(--color-negro-rojizo), var(--color-rojo));
}

.pagina {
    color: var(--color-rojo-oscuro);
}
</style>