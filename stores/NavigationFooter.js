
import { defineStore } from "pinia";


export const useSeccionFooter = defineStore('subSecciones', {
    state: () => ({
        secciones: null,
    }),
    actions: {
        cambiarSecciones (subSecciones) {
            this.secciones = subSecciones;
            console.log(this.secciones)
        },
    }
})

