<template>
    <div class="containerNavFooter">
        <h2 v-for="(pagina, key) in subSeccion" class="text-gray-500" :class="{'active': idActivo == key}" @click="buttonActive(key)">
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
.containerNavFooter {
    display: flex;
    width: 40%;
    align-items: center;
}

.containerNavFooter h2 {
    padding: 10px 50px;
    border-radius: 0 0 15px 15px;
    clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
}

.containerNavFooter h2:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: var(--color-blanco);
}

.active {
    background-color: rgba(0, 0, 0, 0.3);
    color: var(--color-blanco);
    clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%);
}

@media screen and (max-width: 768px) {
    .containerNavFooter h2 {
        padding: 10px 15px;
        font-size: 12px;
    }
}
</style>