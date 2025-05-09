const express = require('express');
const router = express.Router();
const personaServicio = require('../LogicaNegocio/personaServicio');

router.get('/', (req, res) => {
    res.json(personaServicio.obtenerPersonas());
});

router.post('/', (req, res) => {
    const nueva = personaServicio.agregarPersona(req.body);
    res.status(201).json(nueva);
});

router.put('/:id', (req, res) => {
    const actualizada = personaServicio.modificarPersona(parseInt(req.params.id), req.body);
    res.json(actualizada);
});

router.delete('/:id', (req, res) => {
    personaServicio.eliminarPersona(parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
