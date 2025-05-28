<template>
    <div class="containerNavFooter flex w-[40%] items-center">
        <h2 v-for="(pagina, key) in subSeccion" class="subSeccion text-gray-500 py-[10px] md:px-[50px] px-[25px] text-xs md:text-base" :class="{'active': idActivo == key}" @click="buttonActive(key)">
            <nuxt-link to="/Ventas/Facturas/Historial">{{ pagina }}</nuxt-link>
        </h2>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useSeccionFooter } from '~/stores/NavigationFooter';
const footer = useSeccionFooter();
const subSeccion = computed(() => footer.secciones)

onMounted(()=> {
    footer.seccionesGuardadas();
})

const idActivo = ref(0);
</script>

<style scoped>
.subSeccion {
    clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
}

.subSeccion:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: var(--color-blanco);
}

.active {
    background-color: rgba(0, 0, 0, 0.3);
    color: var(--color-blanco);
    clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
}
</style>