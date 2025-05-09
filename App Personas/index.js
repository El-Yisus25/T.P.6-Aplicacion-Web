const express = require('express');
const personaControlador = require('./Presentacion/personaControlador');
const productoControlador = require('./Presentacion/productoControlador');

const app = express();
app.use(express.json());

app.use('/personas', personaControlador);
app.use('/productos', productoControlador);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
