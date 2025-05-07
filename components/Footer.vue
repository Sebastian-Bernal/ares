<template>
    <footer class="section-footer">
        <div class="section-footer__content">
            <p class="text-white">ARES </p>
            <p class="text-white">© 2025 derechos reservados</p>
        </div>
    </footer>
</template>
<style scoped>
.section-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
    grid-area: footer;
}

.section-footer__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
</style>