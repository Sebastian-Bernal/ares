<script setup>
import { traerProductos } from '../stores/productos.js';
import { onMounted, ref } from 'vue';

const productos = ref([]);

onMounted(() => {
    usarTraerProductos();
});

const usarTraerProductos = async () => {
    const data = await traerProductos();
    productos.value = data
};

</script>

<template>
    <Template titulo="Productos">
        <div slot="body">
            <div class="section-inicio">
                <h1 class="font-bold text-2xl text-white">Pagina de Productos Disponibles</h1>
                <div class="container row justify-center mt-5">
                    <div v-for="producto in productos" class="card p-5 shadow-lg rounded-lg mb-4 col-6" :key="producto.id">
                        <div class="card-header">
                            <h2 class="card-title">{{ producto.name }}</h2>
                        </div>
                        <div class="card-body">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div class="card-item">
                                    <img :src="producto.image" alt="" class="card-image">
                                    <p class="card-description">{{ producto.description }}</p>
                                    <p class="card-price">${{ producto.price }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Template>
</template>