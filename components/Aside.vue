<script setup>
import { ref, onMounted } from 'vue';

// const width = ref(window.innerWidth);
// window.addEventListener('resize', () => {
//     width.value = window.innerWidth;
// });

const buttons = ref([
    { id: 1, nombre: 'Inicio', secciones: ['Productos', 'Planes', 'Precios'], icon: '/img/house-chimney.png', active: false },
    { id: 2, nombre: 'Facturas', secciones: ['Generar', 'Historial'], icon: '/img/file.png', active: false },
    { id: 3, nombre: 'Modulos', secciones: ['Tablas', 'Referencias', 'Detalles'], icon: '/img/module.png', active: false },
    { id: 4, nombre: 'Herramientas', secciones: [], icon: '/img/tools.png', active: false },
])

// Configuracion para el estado activo del boton
const activeButton = (id) => {
    buttons.value.forEach(button => {
        if (button.id == id) {
            button.active = true;
            const Inicio = ref(button.nombre);
            // sessionStorage.setItem('Inicio', Inicio.value);
            sessionStorage.setItem('activeButton', id);
        } else {
            button.active = false;
        };
    });
}

onMounted(() => {
    const botonActivo = sessionStorage.getItem('activeButton');
    if (botonActivo) {
        activeButton(parseInt(botonActivo));
    } else {
        activeButton(1);
    }
});


</script>
<template>
    <div class="section-asidebar">
        <div class="section-asidebar__content">

            <div class="left">
                <button v-for="button in buttons" @click="activeButton(button.id)" :class="{ active: button.active }">
                    <NuxtLink :to="`/${button.nombre}`" class="link">
                        <img :src="button.icon" alt="Icono" class="size-6 icon" />
                    </NuxtLink>
                    <div class="right">
                        <NuxtLink :to="`/${button.nombre}`">
                            <h3>{{ button.nombre }}</h3>
                        </NuxtLink>
                        <div class="down" :class="{ ocultar: button.secciones.length == 0 }">
                            <h3 class="font-medium" v-for="seccion in button.secciones">
                                <NuxtLink :to="`/${seccion}`">{{ seccion }}</NuxtLink>
                            </h3>
                        </div>
                    </div>
                </button>
            </div>

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
    padding: 10px;
    width: 150px;
    border-radius: 0 30px 30px 0;
    transition: all 0.3s ease;
}

.right h3 {
    color: #bf0707;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bolder;
    transition: all 0.3s ease;
}

.right h3:hover {
    color: #bf0707;
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

.down {
    opacity: 0;
    position: absolute;
    top: 100%;
    left: -10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateX(-50%) translateY(-5);
    pointer-events: none;
    background-color: #ffffff1f;
    backdrop-filter: blur(20px);
    padding: 10px;
    width: 150px;
    border-radius: 0 0 30px 0;
    transition: all 0.3s ease;
}

.down h3 {
    color: var(--color-gray-300);
}

.down h3:hover {
    color: #e6770f;
}

.right:hover .down {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(10%) translateY(0);
}

.right:hover {
    border-radius: 0 30px 0 0;
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
        position: fixed;
        top: 10%;
        right: -20px;
        left: 20%;
        width: 50vh;
        border-radius: 10px 10px 0 0;
        padding: 10px;
    }

    .right:hover {
        border-radius: 10px 10px 0 0;
    }

    .left:hover .down {
        opacity: 1;
        transform: translateX(0) translateY(0);
    }

    .left button:hover .right {
        transform: translate(-60px, 28%);
    }

    .down {
        left: 0;
        width: 50vh;
        border-radius: 0 0 10px 10px;
    }

    .down:hover {
        pointer-events: all;
    }

    .down h3 {
        width: 100%;
    }

    .down h3 a {
        padding: 5px;
    }

    .btnMostrarMenos {
        rotate: 90deg;
        cursor: pointer;
    }

    .btnMostrarMas {
        rotate: -90deg;
    }

    .link {
        pointer-events: none;
    }
}
</style>