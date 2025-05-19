<script setup>
import { traerProductos } from '../../stores/productos.js';
import { onMounted, ref } from 'vue';
import { useApiRest } from '../../stores/apiRest.js';

const productos = ref([]);
const loader = useApiRest();

onMounted(() => {
    usarTraerProductos();
});

const usarTraerProductos = async () => {
    loader.cargando = true;
    const data = await traerProductos();
    productos.value = data;
    loader.cargando = false;
};

</script>

<template>
    <div class="section-inicio">
        <h1 class="font-bold text-2xl text-white">Pagina de Productos Disponibles</h1>
        <div class="container row justify-center mt-5">
            <div v-for="producto in productos" class="card p-5 shadow-lg rounded-lg mb-4 col-6" :key="producto.id">
                <div class="card-header">
                    <h2 class="card-title text-white">{{ producto.name }}</h2>
                </div>
                <div class="card-body">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div class="card-item">
                            <p class="card-description text-white">{{ producto.description }}</p>
                            <p class="card-price text-green-400">${{ producto.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
