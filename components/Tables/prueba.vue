<script setup>
// importando los reursos
import { defineProps, computed, ref, onMounted, onUnmounted, watch } from 'vue';
import BotonAccion from './BotonAccion.vue';
import InputBgGray from '../Inputs/InputBgGray.vue';

import {usePaginacion} from '@composables/usePaginacion.js'
import {useDatosOrdenadosTabla} from '@composables/useDatosOrdenadosTabla.js'
import {useTablasResponsive} from '@composables/useTablasResponsive.js'
// Definiendo variables
// let menorAMayor = ref(true);
// let columnaOrden = ref('');
// const busqueda = ref('');

// const screenWidth = ref(0);
// const collapse = ref(false);
// const columnasVisibles = ref([]);
// const columnasSobrantes = ref([]);

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
    },
    headerTabla: {
        type: [Object],
    }
});



// tamaño de pantalla
function updateWidth() {
    if (typeof window !== 'undefined') {
        screenWidth.value = window.innerWidth;
    }
};

onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});

// Columnas visibles y sobrantes
watch(() => {
    let acumulado = 0;

    columnasVisibles.value = [];
    columnasSobrantes.value = [];

    props.columnas.forEach((col) => {
        acumulado += col.tamaño;
        if (acumulado <= screenWidth.value - 200) { // Restamos 200px para el espacio de acciones y márgenes
            columnasVisibles.value.push(col);
        } else {
            columnasSobrantes.value.push(col);
        }
    });

    // Si hay columnas sobrantes, se activa el colapso
    collapse.value = columnasSobrantes.value.length > 0;
});

// Collapse activo
const activarCollapse = (id) => {
    const collapseElement = document.getElementById(id);

    if (!collapseElement) return;

    const yaActivo = collapseElement.classList.contains('collapseActive');

    // Cierra todos los elementos activos
    document.querySelectorAll('.collapseActive').forEach(el => {
        el.classList.remove('collapseActive');
    });

    // Si no estaba activo, lo activamos (si ya lo estaba, lo dejamos cerrado)
    if (!yaActivo) {
        collapseElement.classList.add('collapseActive');
    }
};




// Acomodar datos de menor a mayor segun columna
const sortedItems = (nombreColumna) => {
    if (columnaOrden.value === nombreColumna) {
        menorAMayor.value = !menorAMayor.value; // alternar orden
    } else {
        columnaOrden.value = nombreColumna;
        menorAMayor.value = true; // primera vez: menor a mayor
    }
    paginaActual.value = 1
};

// Datos ordenados por busqueda y ordenamiento
const datosOrdenados = computed(() => {
    let datos = [...props.datos.content];

    // Búsqueda
    if (busqueda.value.trim() !== '') {
        const termino = busqueda.value.trim().toLowerCase();
        datos = datos.filter(item =>
            Object.values(item).some(valor =>
                String(valor).toLowerCase().includes(termino)
            )
        );
    }

    // Ordenamiento
    if (columnaOrden.value) {
        datos.sort((a, b) => {
            const valorA = a[columnaOrden.value];
            const valorB = b[columnaOrden.value];

            if (typeof valorA === 'number') {
                return menorAMayor.value ? valorA - valorB : valorB - valorA;
            } else {
                return menorAMayor.value
                    ? String(valorA).localeCompare(String(valorB))
                    : String(valorB).localeCompare(String(valorA));
            }
        });
    }

    return datos;
});




// Paginador
const {
    paginaActual,
    itemsPorPagina,
    totalPaginas,
    cambiarItemsPorPagina,
    siguientePagina,
    paginaAnterior,
    datosPaginados,
} = usePaginacion(datosOrdenados);


// Datos que recorre la tabla
const datosFiltrados = computed(() => {

    const inicio = (paginaActual.value - 1) * itemsPorPagina.value;
    const fin = inicio + itemsPorPagina.value;
    return datosOrdenados.value.slice(inicio, fin)
});

// Tamaño numero de columnas
const estiloColumnas = computed(() => {
    if (!columnasVisibles.value || columnasVisibles.value.length === 0) return {};

    const tamaños = columnasVisibles.value
        .map(col => col.tamaño && !isNaN(col.tamaño) ? `${col.tamaño}px` : '60px')
        .join(' ');

    return {
        gridTemplateColumns: `${tamaños}${props.acciones.botones ? ' 100px' : ''}`
    };
});

</script>

<template>
    <div class="h-[90%]">
        <!-- Header -->
        <div class="flex w-[100%] justify-between items-cent px-10 mt-5 md:flex-row flex-col gap-3">
            <h1 class="font-bold text-2xl tituloTabla text-gray-800">
                {{ props.headerTabla.titulo }}
            </h1>
            <div class="flex gap-3 w-[50%] justify-end">
                <InputBgGray placeholder="Buscar por datos..." icon="fa-search" v-model="busqueda" />
                <div class="flex gap-1 items-center">
                    <button
                        class="text-white w-[30px] h-[30px] rounded-full bg-[var(--color-primary)] hover:opacity-75">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <h4>Agregar</h4>
                </div>
            </div>
        </div>

        <div class="m-[20px] h-[80%] overflow-y-scroll containerTable shadow ">
            <div class="w-full">

                <!-- Header titulos de props Columnas -->
                <div class="grid py-4 px-2 justify-between text-xs font-bold rounded-t-xl text-center text-white bg-[var(--color-rojo-oscuro)]"
                    :style="estiloColumnas">
                    <h2 v-for="col in columnasVisibles" :key="col.titulo"
                        :style="{ width: `${col.tamaño}px`, minWidth: '60px' }">
                        {{ col.titulo }}
                        <i v-if="col.ordenar" @click="sortedItems(col.titulo)" class="fa-solid fa-angle-down"></i>
                    </h2>
                    <h2 v-if="acciones.botones" :class="acciones.class">Acciones</h2>
                </div>

                <hr class="horizontal">

                <!-- Body tabla -->
                <div v-for="(fila, id) in datosFiltrados" class="bodyTable justify-between grid p-2 text-center"
                    :style="estiloColumnas">

                    <div v-for="(col, key) in columnasVisibles" :key="key"
                        :style="{ width: `${col.tamaño}px`, minWidth: '60px' }">
                        <p class="text-black">{{ fila[col.titulo] }}</p>
                    </div>
                    <!-- Acciones -->
                    <div v-if="acciones.botones"
                        class="flex items-center justify-center accionesTabla text-center gap-2"
                        :class="acciones.class">
                        <BotonAccion v-if="!collapse" v-for="action in acciones.icons" :key="action" :tipo="action"
                            @accion="handleAccion" />

                        <button @click="activarCollapse(id)" v-if="collapse"
                            class="flex items-center justify-center bg-gray-200 w-[24px] h-[24px] text-white rounded-full">
                            <i class="fa-solid fa-plus text-gray-600"></i>
                        </button>
                        <button
                            class="flex items-center justify-center bg-gray-200 w-[24px] h-[24px] text-white rounded-full">
                            <i class="fa-solid fa-ellipsis-vertical text-gray-600"></i>
                        </button>
                    </div>

                    <!-- collapse -->
                    <div class="collapse-text col-span-full" :id="id">
                        <h2 v-for="(col, key) in columnasSobrantes" class="col-4">
                            <p class="text-[var(--color-naranja)] text-xs mb-2">{{ col.titulo }}</p>
                            {{ fila[col.titulo] }}
                        </h2>
                    </div>
                </div>

            </div>
        </div>

        <!-- Paginador -->
        <div class="mt-[10px] flex justify-between items-center h-[30px] px-10">
            <p class="text-sm text-gray-500">
                Registros {{ ultimaPagina - itemsPorPagina + 1 }} al {{ ultimaPagina }}</p>

            <div class="btnsPagina flex items-center gap-3">
                <button v-if="paginaActual > 1"
                    class="text-l p-2 text-white w-[30px] h-[30px] flex justify-center items-center rounded-full"
                    @click="paginaAnterior()">
                    <i class="fa-solid fa-caret-left"></i>
                </button>
                <div class="flex gap-2 pagina">
                    <h2 v-if="paginaActual > 1"
                        class="text-gray-600 hover:bg-[var(--color-gray-200)] flex justify-center items-center px-2 w-[30px] h-[30px] rounded-full">
                        {{ paginaActual - 1 }}</h2>
                    <h2
                        class="bg-[var(--color-gray-200)] text-gray-600 flex justify-center items-center px-2 w-[30px] h-[30px] rounded-full">
                        {{ paginaActual }}</h2>
                    <h2 v-if="paginaActual < totalPaginas"
                        class="text-gray-600 hover:bg-[var(--color-gray-200)] flex justify-center items-center px-2 w-[30px] h-[30px] rounded-full">
                        {{ paginaActual + 1 }}</h2>
                </div>
                <button v-if="paginaActual != totalPaginas" class="text-l p-2 text-white w-[30px] h-[30px] flex justify-center items-center rounded-full"
                    @click="siguientePagina()">
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
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    padding: .40rem;
    margin: 0;
    border-radius: 50%;
}

.collapse-text {
    display: none;
    margin-top: 10px;
    border-radius: 10px;
    pointer-events: none;
    gap: 15px;
    justify-content: space-evenly;
}

.collapseActive {
    display: flex;
    pointer-events: all;
}


/* Paginador css */
.btnsPagina button {
    background: linear-gradient(to left, var(--color-negro-rojizo), var(--color-rojo));
}

.horizontal {
    color: var(--color-gris);
}
</style>