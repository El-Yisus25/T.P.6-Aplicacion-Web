const express = require('express');
const personaControlador = require('./Presentacion/personaControlador');

const app = express();
app.use(express.json());

app.use('/personas', personaControlador);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
