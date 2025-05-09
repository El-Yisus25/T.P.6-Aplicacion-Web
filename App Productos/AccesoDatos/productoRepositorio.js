let productos = [];

function obtenerProductos() {
    return productos;
}

function agregarProducto(producto) {
    productos.push(producto);
    return producto;
}

function modificarProducto(id, datos) {
    productos[id] = { ...productos[id], ...datos };
    return productos[id];
}

function eliminarProducto(id) {
    productos.splice(id, 1);
}

module.exports = {
    obtenerProductos,
    agregarProducto,
    modificarProducto,
    eliminarProducto
};
