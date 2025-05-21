<template>
    <div class="section-table">
        <HeaderTabla titulo="Historial De Ventas" />
        <Tabla :columnas="[
                { header: 'id', action: true, link_url: 'https://nose', class: 'col-span-1'},
                { header: 'Nombre', action: true, class: 'col-span-1'},
                { header: 'Cliente', action: false, class: 'col-span-1' },
                { header: 'Cliente', action: true, class: 'col-span-1' },
                { header: 'Fecha', action: true, class: 'col-span-1' }
            ]"
            :acciones="{ action: true, icons: ['ver', 'actualizar', 'borrar'], class: 'col-span-1' }"
            :datos="{content: datosFiltrados}" />
        <Paginador />
    </div>
</template>

<script setup>
import HeaderTabla from '~/components/Tables/HeaderTabla.vue';
import Tabla from '~/components/Tables/Tabla.vue';
import Paginador from '~/components/Tables/Paginador.vue';
import { datosTabla } from '~/data/TablaVenta';

import { computed, onMounted } from 'vue';
import { usePaginador } from '../../../stores/tabla';
const paginador = usePaginador();
const datosFiltrados = computed(() => paginador.datosPaginados);

onMounted(() => {
    paginador.setRegistros(datosTabla);
});
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
    height: 70%;
    overflow-y: scroll;
}

.containerTable::-webkit-scrollbar {
    display: none;
}
</style>