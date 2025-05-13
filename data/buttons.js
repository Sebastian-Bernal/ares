import { ref } from "vue";

export const buttons = ref([
    {
        id: 1,
        nombre: "Inicio",
        secciones: [
        {
            titulo: 'Productos',
            subSecciones: ['Informacion','Agregar','Eliminar']
        },
        {
            titulo: 'Planes',
            subSecciones: ['Pro', 'Familiar']
        },
        {
            titulo: 'Precios',
            subSecciones: ['Individual', 'Estudiante']
        }
        ],
        icon: "fa-home",
        active: false,
    },
    {
        id: 2,
        nombre: "Facturas",
        secciones: [{titulo: "Generar"}, {titulo: "Historial"}],
        icon: "fa-file",
        active: false,
    },
    {
        id: 3,
        nombre: "Modulos",
        secciones: [{titulo: "Tablas"}, {titulo: "Referencias"},{titulo: "Detalles"}],
        icon: "fa-fire",
        active: false,
    },
    {
        id: 4,
        nombre: "Herramientas",
        secciones: [],
        icon: "fa-screwdriver-wrench",
        active: false,
    },
]);
