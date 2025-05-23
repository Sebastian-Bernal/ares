import { defineStore } from "pinia";

export const usePaginador = defineStore("tabla", {
    state: () => ({
        registros: [],
    }),

    actions: {

        // buscarDatos(valor) {
        //     if (!valor || valor.trim() === "") {
        //         this.registros = [...this.registrosOriginales];
        //         return;
        //     }

        //     const texto = valor.toLowerCase();

        //     const filtrados = this.registrosOriginales.filter(item =>
        //         Object.values(item).some(val =>
        //             String(val).toLowerCase().includes(texto)
        //         )
        //     );

        //     this.registros = filtrados;
        //     this.paginaActual = 1;
        // },
    },
});
