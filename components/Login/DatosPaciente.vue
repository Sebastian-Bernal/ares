<script setup>
import Input from './Input.vue';
</script>

<template>
    <div class="w-[66%] flex justify-center items-center gap-2 py-5">
        <button class="w-[50px] h-[50px] rounded-full bg-sky-700 ">1</button>
        <div class="w-[200px] h-[5px] bg-sky-700 rounded-lg"></div>
        <button class="w-[50px] h-[50px] rounded-full bg-gray-300 "><nuxtLink to="/login/DatosCuidador">2</nuxtLink></button>
        <div class="w-[200px] h-[5px] bg-gray-300 rounded-lg"></div>
        <button class="w-[50px] h-[50px] rounded-full bg-gray-300 ">3</button>
    </div>

    <div class="lg:min-w-3/5 md:min-w-4/5 min-w-[90%] min-h-3/4 bg-white rounded-lg shadow-lg p-6 py-7">
        <h1 class="text-3xl text-gray-800 font-bold mb-3 text-center">Datos del paciente</h1>

        <form action="" class="w-full flex flex-col items-center py-3 gap-[15px]">

            <div class="md:w-4/5 w-full">
                <label for="email" class="block text-sm font-medium text-gray-700">Paciente</label>
                <div class="flex items-center gap-3">
                    <Input type="text" id="nombre" name="nombre" placeholder="Nombres y Apellidos" tamaño="w-4/5"/>
                    <Input type="number" id="edad" name="edad" placeholder="Edad" tamaño="w-1/5"/>                
                </div>
            </div>

            <div class="md:w-4/5 w-full flex items-center gap-3">
                <select name="tipoDocumento" id="tipoDocumento"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="" selected>Tipo de documento</option>
                    <option value="cedula">Cedula de ciudadania</option>
                    <option value="extranjera">Cedula Extranjera</option>
                </select>
                <Input type="number" id="documento" name="documento" placeholder="Número de documento" tamaño=""/>                
                <select name="sexo" id="sexo"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="" selected>Sexo</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <div class="md:w-4/5 w-full">
                <label for="email" class="block text-sm font-medium text-gray-700">Direccion</label>
                <div class="flex items-center gap-3">
                    <Input type="text" id="direccion" name="direccion" placeholder="Direccion" tamaño="w-1/4"/>
                    <Input type="text" id="municipio" name="municipio" placeholder="Municipio" tamaño="w-1/4"/>
                    <Input type="text" id="zona" name="zona" placeholder="Zona" tamaño="w-1/4"/>
                    <Input type="text" id="barrio" name="barrio" placeholder="Barrio" tamaño="w-1/4"/>
                </div>
            </div>

            <div class="md:w-4/5 w-full flex items-center gap-3">
                <Input type="number" id="celular" name="celular" placeholder="Celular" tamaño="w-1/2"/>
                <Input type="number" id="telefono" name="telefono" placeholder="Telefono" tamaño="w-1/2"/>
            </div>

            <button type="submit"
                class="md:w-2/3 w-full bg-[var(--color-primary)] text-white font-semibold mt-2 py-2 px-4 rounded hover:opacity-75 transition duration-200">
                <nuxtLink to="/login/DatosCuidador">Siguiente</nuxtLink>
            </button>

        </form>
    </div>
</template>