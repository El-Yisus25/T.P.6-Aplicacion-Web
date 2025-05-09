const repositorio = require('../AccesoDatos/productoRepositorio');

function obtenerProductos() {
    return repositorio.obtenerProductos();
}

function agregarProducto(datos) {
    const producto = {
        nombre: datos.nombre,
        descripcion: datos.descripcion,
        precio: datos.precio
    };
    return repositorio.agregarProducto(producto);
}

function modificarProducto(id, datos) {
    return repositorio.modificarProducto(id, datos);
}

function eliminarProducto(id) {
    repositorio.eliminarProducto(id);
}

module.exports = {
    obtenerProductos,
    agregarProducto,
    modificarProducto,
    eliminarProducto
};
