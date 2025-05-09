export const traerProductos = async () => {
    try {
        const response = await fetch('https://fakerapi.it/api/v2/products?_quantity=5');
        const data = await response.json();
        const productos = data.data
        return productos;
    } catch (error) {
        console.error('Error:', error);
    }
}