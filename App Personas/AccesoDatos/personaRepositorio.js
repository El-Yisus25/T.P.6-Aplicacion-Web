let personas = [];
let siguienteId = 1;

function insertar(persona) {
    persona.id = siguienteId++;
    personas.push(persona);
    return persona;
}

function obtenerTodos() {
    return personas;
}

function actualizar(id, nuevosDatos) {
    const index = personas.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Persona no encontrada');
    personas[index] = { ...personas[index], ...nuevosDatos };
    return personas[index];
}

function eliminar(id) {
    personas = personas.filter(p => p.id !== id);
}

module.exports = {
    insertar,
    obtenerTodos,
    actualizar,
    eliminar
};
