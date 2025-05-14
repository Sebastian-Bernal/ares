<template>
    <div class="containerNavFooter">
        <h2 class="active" >Todos</h2>
        <h2 v-for="pagina in subSeccion">{{ pagina }}</h2>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSeccionFooter } from '~/stores/NavigationFooter';
const footer = useSeccionFooter();
const subSeccion = ref(footer.secciones)

onUpdated(()=>{
    const subSeccion = footer.secciones
})

</script>

<style scoped>
.containerNavFooter {
    display: flex;
    width: 40%;
    align-items: center;
}

.containerNavFooter h2 {
    padding: 10px 50px;
    margin-right: 2px;
    border-radius: 0 0 15px 15px;
    clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%);
}

.containerNavFooter h2:hover {
    background-color: rgba(0,0,0,0.3);
    color: #fff;
}

.active {
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%);
}
</style>