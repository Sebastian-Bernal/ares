<script setup>
import { ref, defineProps } from 'vue';
import DropdownNavbar from './DropdownNavbar.vue';
import { useShowNavbar } from '../../stores/navbarResponsive.js';
const { showNavbarBurguer, cambiarEstado } = useShowNavbar();
const titulo = defineProps(['titulo']);
const tituloNavbar = ref(titulo);

const submenuNotificaciones = [
    { id: 1, nombre: 'Notificaciones', icon: 'fa-bell', link: '#' },
    { id: 2, nombre: 'Alertas', icon: 'fa-bell-concierge', link: '#' }
];

const submenuSesion = [
    { id: 1, nombre: 'Iniciar Sesión', icon: 'fa-user', link: '#' },
    { id: 2, nombre: 'Cerrar Sesión', icon: 'fa-right-from-bracket', link: '#' },
]

</script>

<template>
    <div class="navbar">
        <div class="navbar__content">
            <img src="assets/img/logo_ares_h-02.png" alt="Logo" class="logo" />
            <div class="menuResponsive" @click="cambiarEstado()">
                <img src="../../assets/img/burger-bar.png" class="burgerIcon">
            </div>
            <ul class="navbar__content__list"
                :class="{ 'mostrarResponsive': showNavbarBurguer, 'ocultarResponsive': !showNavbarBurguer }">
                <li>
                    <a href="#">
                        <i class="fa-solid fa-house"></i>
                    </a>
                    <div class="dropdown">
                        <div class="flex text-white borde rounded-lg bg-black" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li class="inline-flex items-center">
                                    <a href="/"
                                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                        <svg class="w-3 h-3 me-2.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Ares
                                    </a>
                                </li>
                                <li :class="{ 'hidden': tituloNavbar.titulo.titulo == undefined }">
                                    <div class="flex items-center">
                                        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <a href="#"
                                            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{
                                            tituloNavbar.titulo.titulo }}</a>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div class="flex items-center">
                                        <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span
                                            class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Informacion</span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </li>
                <li>
                    <DropdownNavbar icon="fa-bell" nombre="Notificaciones" :submenu="submenuNotificaciones" />
                </li>
                <li>
                    <DropdownNavbar icon="fa-circle-user" nombre="Iniciar sesion" :submenu="submenuSesion" />
                </li>
                <li class="text-xs ml-1">Usuario por defecto</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    position: fixed;
    right: 0;
    left: 0;
    padding: 10px;
    backdrop-filter: blur(10px);
    grid-area: navbar;
}

.navbar__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: #fff;
    width: 110px;
    object-fit: contain;
    margin-left: 15px;
}

.navbar__content__list {
    display: flex;
    list-style: none;
    gap: 5px;
}

.navbar__content__list li {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 10px 15px;
}

.dropdown {
    display: none;
    position: absolute;
    top: 50px;
    margin-left: -60px;
    background-color: #150101;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.navbar__content__list li:hover .dropdown {
    display: block;
}

.dropdown li {
    color: #ffffff;
    padding: 5px 10px;
    cursor: pointer;
}

.dropdown li:hover {
    background-color: #1f1f1f;
}

.dropdown::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 20px;
}

.menuResponsive {
    display: none;
    font-size: 20px;
    font-weight: bold;
    color: rgb(0, 173, 238);
}

.burgerIcon {
    cursor: pointer;
}

.buergerIcon:hover {
    background-color: #150101;
    border-radius: 10px;
}

.mostrarResponsive {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
}

@media screen and (max-width: 768px) {
    .ocultarResponsive {
        display: none;
    }

    .navbar {
        height: 40px;
        padding: 0;
    }

    .navbar .logo {
        height: 30px;
        margin: 5px;
    }

    .menuResponsive {
        display: block;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .navbar__content__list {
        position: absolute;
        z-index: 999;
        top: 95px;
        right: 0;
        width: 100%;
        background-color: #150101;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .menuResponsive .navbar__content__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .dropdown {
        display: block;
        position: static;
        margin: 0;
    }

}
</style>