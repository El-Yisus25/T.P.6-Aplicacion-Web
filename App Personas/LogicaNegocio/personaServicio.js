const repo = require('../AccesoDatos/personaRepositorio');

function agregarPersona(datos) {
    if (!datos.nombre || !datos.apellido || !datos.edad) {
    throw new Error('Faltan datos requeridos');
    }
    return repo.insertar(datos);
}

function obtenerPersonas() {
    return repo.obtenerTodos();
}

function modificarPersona(id, datos) {
    return repo.actualizar(id, datos);
}

function eliminarPersona(id) {
    repo.eliminar(id);
}

module.exports = {
    agregarPersona,
    obtenerPersonas,
    modificarPersona,
    eliminarPersona
};
