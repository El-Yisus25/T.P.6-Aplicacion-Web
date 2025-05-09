const express = require('express');
const router = express.Router();
const productoServicio = require('../LogicaNegocio/productoServicio');

router.get('/', (req, res) => {
    res.json(productoServicio.obtenerProductos());
});

router.post('/', (req, res) => {
    const nuevo = productoServicio.agregarProducto(req.body);
    res.status(201).json(nuevo);
});

router.put('/:id', (req, res) => {
    const actualizado = productoServicio.modificarProducto(parseInt(req.params.id), req.body);
    res.json(actualizado);
});

router.delete('/:id', (req, res) => {
    productoServicio.eliminarProducto(parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
