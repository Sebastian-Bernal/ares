<template>
    <div class="md:min-w-2/5 min-w-[90%] min-h-1/4 bg-white rounded-lg shadow-lg p-6 py-10">
        <h1 class="text-2xl font-bold mb-4 text-center">Registro de usuario</h1>
        <form action="" class="w-full h-full flex flex-col justify-between items-center py-5">
            <div class="mb-3 md:w-2/3 w-full">
                <label for="name" class="block text-sm font-medium text-gray-700">Nombre completo</label>
                <input type="text" id="name" name="name" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div class="mb-4 md:w-2/3 w-full">
                <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
                <input type="email" id="email" name="email" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div class="mb-6 md:w-2/3 w-full">
                <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
                <input type="text" id="password" name="password" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>

            <button type="submit"
                class="md:w-2/3 w-full bg-[var(--color-rojo-oscuro)] text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200">
                Registrar</button>
            <p class="text-sm my-3">Ya estas registrado? <nuxtLink to="/login/Ingreso"
                    class="underline font-semibold cursor-pointer">Iniciar Sesión</nuxtLink></p>

        </form>
    </div>
</template>