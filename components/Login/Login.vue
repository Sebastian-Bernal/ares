<script setup>
import { ref } from 'vue';

const mostrarContraseña = ref(false);

const cambiarMostrarContraseña = () => {
    mostrarContraseña.value = !mostrarContraseña.value;
    const passwordInput = document.getElementById('password');
    if (mostrarContraseña.value) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
};
</script>

<template>
    <div class="flex justify-center items-center gap-2">
        <img src="assets/img/logo_ares_h-02.png" alt="Logo Ares" class="sm:w-1/4 md:w-1/5 w-2/4 logo mb-5 select-none">
    </div>
    <div class="lg:min-w-2/5 md:min-w-3/5 min-w-[90%] min-h-1/4 bg-white rounded-lg shadow-lg p-6 py-10">
        <h1 class="text-3xl text-gray-800 font-bold mb-4 text-center">Inicio de sesión</h1>
        <form action="" class="w-full h-full flex flex-col justify-between items-center py-5">
            <div class="mb-3 md:w-2/3 w-full">
                <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
                <input type="email" id="email" name="email" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div class="mb-4 md:w-2/3 w-full">
                <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
                <div class="relative">
                    <input type="password" id="password" name="password" required
                        class="mt-1 pr-8 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <i v-if="!mostrarContraseña"
                        class="fa-solid fa-eye-slash text-gray-600 absolute right-[2%] top-[27%] text-lg"
                        @click="cambiarMostrarContraseña()"></i>
                    <i v-if="mostrarContraseña"
                        class="fa-solid fa-eye absolute text-gray-700 right-[2%] top-[27%] text-lg"
                        @click="cambiarMostrarContraseña()"></i>
                </div>

            </div>

            <button type="submit"
                class="md:w-2/3 w-full bg-[var(--color-rojo-oscuro)] text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200">
                <nuxtLink to="/">Iniciar sesión</nuxtLink>
            </button>
            <p class="text-sm my-3">
                Olvidaste tu contraseña?
                <nuxtLink to="/login/Registrar" class="underline font-semibold cursor-pointer">Recuperar</nuxtLink>
            </p>

        </form>
    </div>
</template>

<style scoped>
.logo {
    transition: all 0.3s ease-in-out;
    animation: logo 2s;
}

@keyframes logo {
    0% {
        transform: translate(0, -20%);
        opacity: 0;
    }

    100% {
        transform: translate(0%, 0%);
        opacity: 1;
    }
}
</style>