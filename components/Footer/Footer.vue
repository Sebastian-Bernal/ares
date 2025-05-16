<script setup>
import NavigationFooter from './NavigationFooter.vue';
</script>

<template>
    <footer class="section-footer">
        <div class="section-footer__content">
            <div class="flex w-[60%] items-center">
                <p class="text-white w-[70px] logoFooter">ARES</p>
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
    height: 50px;
}

.section-footer__content {
    padding: 0 20px;
    height: 44px;
    display: flex;
}

@media screen and (max-width: 768px) {
    .logoFooter {
        display: none;
    }

    .section-footer {
        height: 40px;
    }

    .section-footer__content {
        padding: 0 10px;
    }
}
</style>