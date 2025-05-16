<template>
    <div class="section-content">
        <div class="section-inicio">
            <h1 class="font-bold text-2xl text-white">Facturas</h1>
            <p class="text-white mt-4">kemkxemkemcowkecmwlxk,
                voluptatibus.
            </p>
            <p class="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                voluptatibus.</p>
            <button class="bg-black text-white px-4 py-2 rounded mt-5 hover:bg-amber-900" @click="mostrarAlerta()">
                Generar Factura
            </button>
        </div>
    </div>
</template>

<script setup>

const { $swal } = useNuxtApp();

function mostrarAlerta (){
    $swal.fire("alerta");
};

</script>