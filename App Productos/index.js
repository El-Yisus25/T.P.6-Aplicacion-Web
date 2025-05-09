const express = require('express');
const app = express();
const productoControlador = require('./Presentacion/productoControlador');

app.use(express.json());
app.use('/productos', productoControlador);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor de productos escuchando en http://localhost:${PORT}`);
});
