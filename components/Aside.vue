<script setup>
import { ref, computed } from 'vue';

const buttons = ref([
    { id: 1, nombre: 'Inicio', icon: '/img/house-chimney.png', active: true },
    { id: 2, nombre: 'Facturas', icon: '/img/file.png', active: false },
    { id: 3, nombre: 'Modulos', icon: '/img/module.png', active: false },
    { id: 4, nombre: 'Herramientas', icon: '/img/tools.png', active: false },
    { id: 6, nombre: 'Modulos', icon: '/img/module.png', active: false }
])

const activeButton = (id) => {
    buttons.value.forEach(button => {
        if(button.id == id){
            button.active = true;
        } else {
            button.active = false;
        };
    });
}

// Configuración de los iconos
const iconosVisibles = ref(4);
const primerIcono = ref(0);

const iconosCortados = computed(() => {
    return buttons.value.slice(primerIcono.value, iconosVisibles.value);
});

const MostrarMasIconos = () => {
    if (iconosVisibles.value < buttons.value.length) {
        iconosVisibles.value++;
        primerIcono.value = iconosVisibles.value - 4;
    }
}

const MostrarMenosIconos = () => {
    if (primerIcono.value > 0) {
        iconosVisibles.value--;
        primerIcono.value = iconosVisibles.value - 4;
    }
}

</script>
<template>
    <div class="section-asidebar">
        <div class="section-asidebar__content">
            <svg @click="MostrarMenosIconos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="size-6 btnMostrarMenos" :class="{ ocultar: iconosVisibles <= 4 }">
                <path fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clip-rule="evenodd" />
            </svg>
            <div class="left">
                <button v-for="button in iconosCortados" @click="activeButton(button.id)" 
                    :class="{ active: button.active }">
                    <NuxtLink :to="`/${button.nombre}`" class="link">
                    <img :src="button.icon" alt="Icono" class="size-6 icon" />
                    <div class="right">
                        <h3>{{ button.nombre }}</h3>
                    </div>
                    </NuxtLink>
                </button>
            </div>
            <svg @click="MostrarMasIconos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="size-6 btnMostrarMas" :class="{ ocultar: iconosVisibles >= buttons.length }">
                <path fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clip-rule="evenodd" />
            </svg>
        </div>
    </div>
</template>

<style scoped>
.section-asidebar {
    margin: 10px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    grid-area: aside;
}

.section-asidebar__content {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 60%;
    background-color: #fa696980;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

.left {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.left button {
    border: none;
    cursor: pointer;
    color: #e4e4e4;
    padding: 15px;
    font-size: 24px;
    display: flex;
    border-radius: 50% 0 0 50%;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.left button:hover {
    background-color: #fa6969;
    color: #ffffff;
}

.left button .icon {
    filter: invert(1);
}

.right {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-10px) translateY(-50%);
    pointer-events: none;
    background-color: #fa6969;
    backdrop-filter: blur(10px);
    padding: 10px;
    width: 150px;
    border-radius: 0 30px 30px 0;
    transition: all 0.3s ease;
}

.right h3 {
    color: #ffffff;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.left button:hover .right {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0) translateY(-50%);
}

.left button.active {
    background-color: #bf0707;
    color: #ffffff;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.btnMostrarMenos {
    rotate: 180deg;
    cursor: pointer;
}

.btnMostrarMas {
    cursor: pointer;
}

.ocultar {
    display: none;
}

@media screen and (max-width: 768px) {
    .section-asidebar {
        width: 100%;
        height: 30px;
        margin: 0;
    }

    .section-asidebar__content {
        width: 100%;
        height: 60px;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 0;
        background-color: transparent;
    }

    .left {
        width: 100%;
        flex-direction: row;
    }

    .left button {
        justify-content: center;
        font-size: 16px;
        border-radius: 50%;
    }

    .right {
        display: none;
    }

    .left button:hover .right {
        transform: translate(-60px, 28%);
    }

    .btnMostrarMenos {
        rotate: 90deg;
        cursor: pointer;
    }

    .btnMostrarMas {
        rotate: -90deg;
    }
}
</style>