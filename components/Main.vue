<template>
    <div class="section-content">
        <div class="section-inicio">
            <h1 class="font-bold text-2xl text-white">Bienvenido</h1>
            <p class="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            </p>
        </div>
    </div>
</template>
<style scoped>
.section-content {
    grid-area: main;
    overflow-y: scroll;
    /* background-color: #ffffff; */
}

.section-inicio {
    height: 120vh;
}

.section-login h1 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
}

/* Scroll */
.section-content::-webkit-scrollbar {
    width: 8px;     
    height: 5px;    
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

@media screen and (max-width: 768px) {
    .section-content {
        padding: 0 15px;
    }
}
</style>