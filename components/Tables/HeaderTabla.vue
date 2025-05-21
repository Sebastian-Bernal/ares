<template>
    <div class="flex w-[100%] justify-between items-cent px-10 mt-5 md:flex-row flex-col gap-3">

        <h1 class="font-bold text-2xl tituloTabla">
            {{ titulo }}
        </h1>
        <div class="flex gap-3 w-[50%] justify-end">
            <InputBgGray placeholder="Filtrar por datos..." icon="fa-search" v-model="buscar"/>
            <div class="flex gap-1 items-center">
                <button class="btnAgregar text-white">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <h4>Agregar</h4>
            </div>
        </div>

    </div>
</template>

<script setup>
import InputBgGray from '~/components/Inputs/InputBgGray.vue';
import { defineProps } from 'vue';

const props = defineProps(['titulo']);

</script>

<style scoped>
.tituloTabla {
    color: var(--color-rojo);
    text-shadow: 5px 5px 4px var(--color-gris);
}

.btnAgregar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--color-primary);
}

.btnAgregar:hover {
    opacity: .8;
}
</style>