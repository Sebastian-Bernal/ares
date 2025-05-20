<template>
    <div class="section-table">

        <div class="flex w-[100%] justify-between items-cent px-10 mt-5 md:flex-row flex-col gap-3">
            <h1 class="font-bold text-2xl tituloTabla">Historial de ventas</h1>
            <div class="flex gap-3 w-[50%] justify-end">
                <InputBgGray placeholder="Filtrar por datos..." icon="fa-search"/>
                <div class="flex gap-1 items-center">
                    <button class="btnAgregar text-white"><i class="fa-solid fa-plus"></i></button>
                    <h4>Agregar</h4>
                </div>
            </div>
        </div>
        <Tabla/>
        <Paginador/>
    </div>
</template>

<script setup>
import InputBgGray from '~/components/Inputs/InputBgGray.vue';
import Tabla from '~/components/Tables/Tabla.vue';
import Paginador from '~/components/Tables/Paginador.vue';

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
    height: 50vh;
    overflow-y: scroll;
}

.containerTable::-webkit-scrollbar {
    display: none;
}

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