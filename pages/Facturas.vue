<template>
    <Template :page="Facturas" :title="Facturas">
        <div class="section-content" slot="body">
            <div class="section-inicio">
                <h1 class="font-bold text-2xl text-white">Facturas</h1>
                <p class="text-white mt-4">kemkxemkemcowkecmwlxk,
                    voluptatibus.
                </p>
                <p class="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    voluptatibus.</p>
                <button class="bg-black text-white px-4 py-2 rounded mt-5">Generar Factura</button>
            </div>
        </div>
    </Template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const Facturas = 'Facturas'
const page = ref('Facturas')
</script>