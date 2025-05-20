<template>
    <div class="paginador px-10">
        <p class="text-sm text-gray-500">Registros {{ ultimaPagina - paginador.itemsPorPagina }} al {{ ultimaPagina}}</p>
        <div class="btnsPagina">
            <button class="text-l p-2 text-white" @click="paginador.paginaAnterior()">
                <i class="fa-solid fa-caret-left"></i>
            </button>
            <div class="flex gap-2 pagina">
                <h2>1</h2>
                <h2>2</h2>
                <h2>3</h2>
            </div>
            <button class="text-l p-2 text-white" @click="paginador.siguientePagina()">
                <i class="fa-solid fa-caret-right"></i>
            </button>
        </div>
        <div class="flex gap-2 items-center">
            <p class="text-sm text-gray-500">Numero de registros</p>
            <select name="numRegistros" class="text-black bg-gray-200 rounded-xl p-1" v-model.number="paginador.itemsPorPagina">
                <option value="5" selected>5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePaginador } from '../../stores/paginador';
const paginador = usePaginador();
const ultimaPagina = computed(() => paginador.itemsPorPagina* paginador.paginaActual);
</script>

<style scoped>
.paginador {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    color: var(--color--negro);
}

.btnsPagina {
    display: flex;
    align-items: center;
    gap: 20px;
}

.btnsPagina button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(to left, var(--color-negro-rojizo), var(--color-rojo));
}

.pagina {
    color: var(--color-rojo-oscuro);
}
</style>