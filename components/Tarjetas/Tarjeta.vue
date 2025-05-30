<script setup>
import { ref } from 'vue';

const props = defineProps({
    contenido: {
        type: [Array, Object],
        request: true
    }
});

const { $swal } = useNuxtApp();

function mostrarProducto() {
    $swal.fire("Informacion");
};

function mostrarAlmacenes(item) {
    $swal.fire({
        title: `<h2>Producto: ${item.articulo}</h2>`,
        html: `
            Almacen 5: <b>${0} Productos</b> <br>
            Almacen 6: <b>${0} Productos</b> <br>
            Almacen 7: <b>${0} Productos</b> <br>
            Almacen 8: <b>${0} Productos</b> <br>`,
        // showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `<i class="fa fa-pencil"></i> Modificar Inventario`,
        confirmButtonColor: "var(--color-primary)",
        cancelButtonText: `<i class="fa fa-close"></i> Cerrar`,
        cancelButtonColor: "var(--color-rojo-oscuro)",
    });
};
</script>

<template>
    <!-- Contenedor tarjetas -->
    <div class="grid xl:grid-col-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full p-[20px] gap-5">

        <!-- Tarjeta -->
        <div v-for="item in contenido"
            class="w-[100%] rounded-xl flex flex-col justify-center items-center bg-radial from-white from-30% to-gray-300 shadow-xl mb-[25px]">
            <div class="z-0 relative top-[-25px] bg-gray-300 rounded-full flex justify-center items-center shadow-2xl">
                <i class="fa-solid fa-circle-user text-7xl text-gray-700 text-shadow-lg text-shadow-black"></i>
            </div>
            <div class="min-h-[200px] flex flex-col items-center mb-5 px-3">
                <p class="text-xs text-gray-500">Articulo</p>
                <h2 class="text-lg font-bold"> {{ item.nombre }}</h2>
                <h4 class="text-lg font-bold mb-3">{{ item.linea }}</h4>
                <div class="flex flex-col justify-center items-start truncate">
                    <p>
                        <span class="text-xs font-bold">Subgrupo :</span> {{ item.subgrupo }}
                    </p>
                    <p>
                        <span class="text-xs font-bold">Linea :</span> {{ item.linea }}
                    </p>
                    <p>
                        <span class="text-xs font-bold">Referencia :</span> {{ item.referencia }}
                    </p>
                </div>

                <button @click="mostrarAlmacenes(item)"
                    class=" mt-5 w-[100%] h-[30px] bg-[var(--color-gray-300)] rounded-xl text-black font-bold text-xs hover:opacity-75">
                    Total de productos: {{ 0 }}
                </button>
                <div class="w-full flex justify-center gap-2 mt-5">
                    <button @click="mostrarProducto()"
                        class="w-[45%] h-[30px] bg-[var(--color-primary)] rounded-xl text-white font-bold text-xs hover:opacity-75">
                        Informacion
                    </button>
                    <button
                        class="w-[45%] h-[30px] bg-[var(--color-rojo-oscuro)] rounded-xl text-white font-bold text-xs hover:opacity-75">
                        {{ item.costo }} $
                    </button>
                </div>
            </div>
        </div>

        <!-- <ModalTarjetas v-if="modalActivo" :modalActivo="modalActivo" :datosModal="datosModal"
            @click="modalActivo = false" /> -->
    </div>
</template>