<template>
    <footer class="section-footer">
        <div class="section-footer__content">
            <div class="flex w-[60%] justify-start items-center">
                <p class="text-white w-[70px]">ARES</p>
                <div class="containerNavFooter">
                    <h2 class="active">Todos</h2>
                    <h2>Eliminar</h2>
                    <h2>Agregar</h2>
                    <h2></h2>
                </div>
            </div>

            <!-- <p class="text-white">© 2025 derechos reservados</p> -->
        </div>
    </footer>
</template>
<style scoped>
.section-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    grid-area: footer;
    height: 45px;
}

.section-footer__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.containerNavFooter {
    display: flex;
    width: 40%;
    justify-content: space-around;
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