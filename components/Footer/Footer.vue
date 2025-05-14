<script setup>
import NavigationFooter from './NavigationFooter.vue';
// import { useSeccionFooter } from '~/stores/NavigationFooter';
// const footer = useSeccionFooter();

// console.log(footer.secciones)
</script>

<template>
    <footer class="section-footer">
        <div class="section-footer__content">
            <div class="flex w-[60%] justify-start items-center">
                <p class="text-white w-[70px]">ARES</p>
                <NavigationFooter/>
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
    padding: 0 20px;
}
</style>