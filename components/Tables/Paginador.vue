<template>
            <div class="paginador">
            <!-- <p class="text-sm justify-self-start">5 filas</p> -->
            <div class="btnsPagina">
                <button class="text-l bg-gray-300 p-2">
                    <i class="fa-solid fa-caret-left"></i>
                </button>
                <div class="flex gap-2">
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                </div>
                <button class="text-l bg-gray-300 p-2">
                    <i class="fa-solid fa-caret-right"></i>
                </button>
            </div>
        </div>
</template>

<style scoped>
.paginador {
    margin: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    color: var(--color--negro);
}


.btnsPagina {
    display: flex;
    align-items: center;
    gap: 20px;
}

.btnsPagina button:hover {
    background-color: var(--color-gray-400);
}

.btnsPagina button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
</style>