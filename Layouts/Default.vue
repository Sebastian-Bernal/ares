<template>
    <div class="containerMain">
        <Navbar :titulo="tituloNavbar"></Navbar>
        <Aside></Aside>
            <div class="section-content">
                <slot></slot>
            </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
const titulo = defineProps(['titulo']);
const tituloNavbar = ref(titulo);
</script>

<style scoped>
.containerMain {
    display: grid;
    grid-template-areas:
        "navbar navbar"
        "aside main"
        "footer footer";
    grid-template-rows: 60px 1fr 50px;
    grid-template-columns: 80px 1fr;
    height: 100vh;
    background: radial-gradient(at left top, #bf0707, #150101);
    overflow-y: none;
}

@media screen and (max-width: 768px) {
    .containerMain {
        grid-template-areas: "navbar" "aside" "main" "footer";
        grid-template-rows: 45px 60px 1fr 40px;
        grid-template-columns: 1fr;
    }

    .section-content {
        padding: 5px 15px;
    }
}

.section-content {
    grid-area: main;
    overflow-y: scroll;
    background-color: rgba(0,0,0,0.3);
    margin: 0 10px;
    padding: 20px;
}

/* Scroll */
.section-content::-webkit-scrollbar {
    width: 5px;     
    height: 2px;    
}

.section-content::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 5px;
}

.section-content::-webkit-scrollbar-thumb:hover {
    background: #867878;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

.section-content::-webkit-scrollbar-track {
    backdrop-filter: blur(10px);
    border-radius: 4px;
}
</style>