<script setup>
// importando los reursos
import { defineProps, computed, ref, onMounted, onUnmounted, watch } from 'vue';

// Definiendo variables
let menorAMayor = ref(true);
let columnaOrden = ref('')
const paginaActual = ref(1);
const itemsPorPagina = ref(10);
const screenWidth = ref(0);
const collapse = ref(false)
let columnasVisibles = ref([]);
let columnasSobrantes = ref([]);

// funciones
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

// tamaño de pantalla
function updateWidth() {
    if (typeof window !== 'undefined') {
        screenWidth.value = window.innerWidth;
    }
}

onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});


watch(() => {
    let acumulado = 0;

    for (let columna in props.columnas) {
        acumulado += columna.tamaño;
        if (acumulado <= screenWidth.value) {
            columnasVisibles.value.push(columna);
        } else {
            columnasSobrantes.value.push(columna);
        }
    }

    // Puedes actualizar aquí el estado de colapso si lo deseas
    collapse.value = columnasSobrantes.length > 0;

});

console.log(columnasSobrantes.value, columnasVisibles.value)


// Acomodar datos de menor a mayor
const sortedItems = (valorColumna, data) => {
    if (valorColumna.value !== '') {
        return [...data].sort((a, b) => {
            if (typeof a[valorColumna] === 'number') {
                return menorAMayor.value ? a[valorColumna] - b[valorColumna] : b[valorColumna] - a[valorColumna]
            } else {
                return menorAMayor.value ? a[valorColumna].localeCompare(b[valorColumna]) : b[valorColumna].localeCompare(a[valorColumna])
            }
        })
        menorAMayor = !menorAMayor.value
    }
};


// Paginador
const ultimaPagina = computed(() => itemsPorPagina.value * paginaActual.value);
let totalPaginas = Math.ceil(props.datos.content.length / itemsPorPagina.value);

// Funciones del paginador
const cambiarItemsPorPagina = (event) => {
    itemsPorPagina.value = event.target.value;
    paginaActual.value = 1;
    totalPaginas = Math.ceil(props.datos.content.length / itemsPorPagina.value)
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

// Datos que recorre la tabla
const datosFiltrados = computed(() => {

    const inicio = (paginaActual.value - 1) * itemsPorPagina.value;
    const fin = inicio + itemsPorPagina.value;
    return props.datos.content.slice(inicio, fin)
});

// Grid numero de columnas
const numeroColumnas = computed(() => {
    const numeroColumnas = Object.keys(props.datos.content[0]).length;
    return props.acciones?.action ? numeroColumnas + 1 : numeroColumnas
});

</script>

<template>
    <div class="h-[85%]">

        <div class="m-[20px] h-[80%] overflow-y-scroll containerTable">
            <div class="w-full">
                <!-- Header -->
                <div class="grid p-2 text-xs font-bold rounded-t-xl text-center text-[var(--color-naranja)]"
                    :class="`grid-cols-${numeroColumnas}`">
                    <h2 v-for="(col, key) in datosFiltrados[0]" :class="col.class">
                        {{ key }}
                        <i v-if="col.action" class="fa-solid fa-caret-down" @click="columnaOrden = key"></i>
                    </h2>
                    <h2 v-if="acciones?.action" :class="acciones.class">Acciones</h2>
                </div>

                <hr class="horizontal mt-2">
                <!-- Body -->
                <div v-for="data in datosFiltrados" class="bodyTable grid p-2 text-center"
                    :class="`grid-cols-${numeroColumnas}`">

                    <div v-for="(value, key) in data">
                        <p>{{ data[key] }}</p>
                    </div>

                    <!-- <div v-for="col in columnas" :class="col.class">
                        <a v-if="col.link_url" :href="col.link_url" class="underline text-sky-900">
                            {{ data[col.valorColumna] }}
                        </a>
                        <p v-else>{{ data[col.valorColumna] }}</p>
                    </div> -->

                    <div v-if="acciones.action" class="flex items-center justify-center accionesTabla text-center gap-2"
                        :class="acciones.class">
                        <p v-for="action in acciones.icons" class="inline">
                            <i v-if="action === 'ver'" class="fa-solid fa-eye btnActions bg-sky-600 text-xs"></i>
                            <i v-else-if="action === 'actualizar'"
                                class="fa-solid fa-pencil btnActions bg-[var(--color-naranja)] text-xs"></i>
                            <i v-else-if="action === 'borrar'"
                                class="fa-solid fa-trash btnActions bg-red-600 text-xs"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Paginador -->
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
                    @change="cambiarItemsPorPagina($event)">
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    </div>
</template>



<style scoped>
.containerTable::-webkit-scrollbar {
    display: none;
}

.bodyTable:nth-child(even) {
    background-color: var(--color-rojo-claro-trp5);
}

.bodyTable:hover:nth-child(even) {
    background-color: var(--color-gris);
    color: var(--color-blanco);
}

.bodyTable:hover {
    background-color: var(--color-gris);
    color: var(--color-blanco);
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

.horizontal {
    color: var(--color-gris);
}
</style>