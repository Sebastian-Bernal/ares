<script setup>
import HeaderTabla from '~/components/Tables/HeaderTabla.vue';
import Tabla from '~/components/Tables/Tabla.vue';
import { datosTabla, datosUser } from '~/data/TablaVenta';
import { usuariosTabla } from '~/data/datosUsuario';


</script>

<template>
    <div class="w-full h-full bg-[var(--color-blanco)] rounded-2xl py-2">
        <HeaderTabla titulo="Historial De Ventas" action="buscar" />
        <Tabla 
            :columnas="[
                {tamaño: 100, titulo: 'columna'},
                {tamaño: 100, titulo: 'columna'},
                {tamaño: 100, titulo: 'columna'},
                {tamaño: 100, titulo: 'columna'},
                {tamaño: 100, titulo: 'columna'},
                {tamaño: 100, titulo: 'columna'},
                {tamaño: 100, titulo: 'columna'},
                {tamaño: 100, titulo: 'columna'},
                {tamaño: 100, titulo: 'columna'},
            ]"
            :firsth="{tamaño: '200px'}"
            :second="{tamaño: '200px'}"
            :third="{ tamaño: '200px'}"
            :fourth="{ tamaño: '200px'}"
            :acciones="{ action: true, icons: ['ver', 'actualizar', 'borrar'], class: 'col-span-1' }"
            :datos="{content: usuariosTabla}" />
    </div>
</template>