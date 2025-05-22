import { defineStore } from "pinia";

export const usePaginador = defineStore("tabla", {
    state: () => ({
        registros: [],
    }),

    getters: {
        puedeAvanzar(state) {
            return (
                state.paginaActual <
                Math.ceil(state.registros.length / state.itemsPorPagina)
            );
        },

        puedeRetroceder(state) {
            return state.paginaActual > 1;
        },
    },

    actions: {
        setRegistros(data) {
            this.registros = data;
            this.paginaActual = 1;
        },

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

        buscarDatos(buscar) {
            console.log(buscar)
            if (buscar = '') {
               let datosfiltrados = []
               this.registros = datosfiltrados
            } else {
                const texto = buscar.toLowerCase()
                const datosfiltrados = this.registrosOriginales.filter(item =>
                    item.Cliente.includes(texto) ||
                    item.id.includes(texto)
                    // Object.values(item).some(val =>
                    //     String(val).toLowerCase().includes(texto)
                    // )
                )
                this.registros = datosfiltrados
            }
           

        return this.registros
       
        }


    },
});
