<script setup>
import HeaderTabla from '~/components/Tables/HeaderTabla.vue';
import Tabla from '~/components/Tables/Tabla.vue';
// import { datosTabla, datosUser, datosCollapse } from '~/data/TablaVenta';
// import { usuariosTabla } from '~/data/datosUsuario';
import { onMounted, ref } from 'vue';
import { traerUsuarios } from '../../../stores/productos.js';
import { useApiRest } from '../../stores/apiRest.js';

const usuarios = ref([]);
const loader = useApiRest();

onMounted(() => {
    usarTraerUsuarios();
});

const usarTraerUsuarios = async () => {
    loader.cargando = true;
    const data = await traerUsuarios();
    usuarios.value = data;
    loader.cargando = false;
};
</script>

<template>
    <div class="w-full h-full bg-[var(--color-blanco)] rounded-2xl py-2">
        <HeaderTabla titulo="Historial De Ventas" action="buscar" />
        <Tabla 
            :columnas="[
                {tamaño: 100, titulo: 'id'},
                {tamaño: 150, titulo: 'firstname'},
                {tamaño: 200, titulo: 'lastname'},
                {tamaño: 200, titulo: 'email'},
                {tamaño: 200, titulo: 'phone'},
                {tamaño: 150, titulo: 'gender'},
                {tamaño: 250, titulo: 'website'},
                {tamaño: 150, titulo: 'birthday'},
            ]"
            :acciones="{ action: true, icons: ['ver', 'actualizar', 'borrar'], tamaño: 100 }"
            :datos="{content: usuarios}" />
    </div>
</template>