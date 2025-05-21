import { defineStore } from "pinia";

export const usePaginador = defineStore("tabla", {
    state: () => ({
        registros: [],
        paginaActual: 1,
        itemsPorPagina: 10,
    }),

    getters: {
        totalPaginas(state) {
            return Math.ceil(state.registros.length / state.itemsPorPagina);
        },

        datosPaginados(state) {
            const inicio = (state.paginaActual - 1) * state.itemsPorPagina;
            const fin = inicio + state.itemsPorPagina;
            return state.registros.slice(inicio, fin);
        },

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
        cambiarItemsPorPagina(value) {
            this.itemsPorPagina = value;
            this.paginaActual = 1;
        },

        siguientePagina() {
            if (this.paginaActual < this.totalPaginas) {
                this.paginaActual++;
            }
        },

        paginaAnterior() {
            if (this.paginaActual > 1) {
                this.paginaActual--;
            }
        },

        setRegistros(data) {
            this.registros = data;
            this.paginaActual = 1;
        },

        buscarDatos(value) {
            this.registros.filter((data) => {
                data.Cliente === value.toUpperCase()
            })
        },
    },
});
