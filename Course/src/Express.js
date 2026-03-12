// ~Routes y app.use en Express.
// ?Importacion de rutas.
import express from 'express';
const route = express.Router();

route.get('/rutaNombre', (req, res) => {});

export { route };