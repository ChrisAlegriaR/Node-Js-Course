import express from 'express'
import envs from './config/env.js'
import mongoose from 'mongoose';
import { router } from './routes/book.route.js';

// *Declaracion de app con express(), para ejecutar rutas y levantar el servidor.
const app = express();

// *Se define ruta por defecto en caso de que no se encuentre ninguna especificada (404).
app.get(/.*/, (req, res) => {
    res.send('<h1>¡Servidor funcionando perfectamente!</h1>');
})

app.use('/book', router);

// ~Se definen las rutas de "Book".
// *Se define ruta Get que extrae los libros desde book.
// app.use('/book', book_get);

// *Se define y realiza el levantamiento del servidor en un puerto.
app.listen(envs.port,() => {
    console.log(`Servidor ejecutandose en el puerto: ${envs.port}.`)
})
