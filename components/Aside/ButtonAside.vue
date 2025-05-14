<template>
    <button :class="{ 'active' : data.active }">
        <NuxtLink :to="`/${data.nombre}`" class="link" @click="activeButton(data.id)">
            <i class="fa-solid text-xl" :class="data.icon"></i>
        </NuxtLink>
        <div class="right" @click="activeButton(data.id)">
            <NuxtLink :to="`/${data.nombre}`" @click="footer.cambiarSecciones(null)">
                <h3>{{ data.nombre }}</h3>
            </NuxtLink>
            <div class="down" :class="{ 'ocultar': data.secciones.length == 0 }">
                <h3 class="font-medium" v-for="seccion in data.secciones">
                    <NuxtLink :to="`/${seccion.titulo}`" @click="footer.cambiarSecciones(seccion.subSecciones)">
                        {{ seccion.titulo }}
                    </NuxtLink>
                </h3>
            </div>
        </div>
    </button>
</template>

<script setup>
import { activeButton, sessionActive } from '~/stores/ButtonActive';
import { useSeccionFooter } from '~/stores/NavigationFooter';
const titulo = defineProps(['data']);
const footer = useSeccionFooter();

onMounted(() => {
    sessionActive()
});
</script>

<style scoped>
button {
    border: none;
    cursor: pointer;
    color: #e4e4e4;
    padding: 15px;
    display: flex;
    border-radius: 50% 0 0 50%;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
    background-color: #fa6969;
    color: #ffffff;
}

button.active {
    background-color: #bf0707;
    color: #ffffff;
    transition: background-color 0.3s ease, color 0.3s ease;
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

.ocultar {
    display: none;
}

/* Lista Submenu */

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

.show-navbar {
    pointer-events: none;
}

.link {
    width: 24px;
    height: 24px;
}

@media screen and (max-width: 768px) {

    button {
        justify-content: center;
        font-size: 16px;
        border-radius: 50%;
    }

    .right {
        position: fixed;
        top: 11%;
        right: -20px;
        left: 20%;
        width: 50vh;
        border-radius: 10px 10px 0 0;
        padding: 10px;
    }

    .right:hover {
        border-radius: 10px 10px 0 0;
        /* pointer-events: all; */
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

    .link {
        pointer-events: none;
    }
}
</style>