<script setup>
import { computed } from 'vue';
import HeaderTabla from '~/components/Tables/HeaderTabla.vue';
import Tabla from '~/components/Tables/Tabla.vue';
import Paginador from '~/components/Tables/Paginador.vue';
import { datosTabla } from '~/data/TablaVenta';


</script>

<template>
    <div class="section-table">
        <HeaderTabla titulo="Historial De Ventas" action="buscar" />
        <Tabla :columnas="[
                { header: 'Id', key: 'id', action: true, link_url: 'https://nose', class: 'col-span-1'},
                { header: 'Nombre', key: 'Nombre', action: true, class: 'col-span-1'},
                { header: 'Cliente', key: 'Cliente', action: false, class: 'col-span-1' },
                { header: 'Cliente', key: 'Cliente', action: true, class: 'col-span-1' },
                { header: 'Fecha', key: 'Fecha', action: true, class: 'col-span-1' }
            ]"
            :acciones="{ action: true, icons: ['ver', 'actualizar', 'borrar'], class: 'col-span-1' }"
            :datos="{content: datosTabla}" />
        <!-- <Paginador /> -->
    </div>
</template>

<style scoped>
.section-table {
    border-radius: 16px;
    padding: 10px 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-blanco);
}
</style>