import express from 'express'
import envs from './config/env.js'
import mongoose from 'mongoose';
import { router as book_router} from './routes/book.route.js';
import bodyParser from 'body-parser';

// *Declaracion de app con express(), para ejecutar rutas y levantar el servidor.
const app = express();

// *Se define ruta por defecto en caso de que no se encuentre ninguna especificada (404).
// app.get(/.*/, (req, res) => {
//     res.send('<h1>¡Servidor funcionando perfectamente!</h1>');
// })

// *Parseo de los bodies.
app.use(bodyParser.json())

// *Conección a MongoDB.
mongoose.connect(envs.mongo_url, {dbName: envs.mongo_db});
const db = mongoose.connection;

// *Declaracion de rutas books.
app.use('/books', book_router);

// *Se define y realiza el levantamiento del servidor en un puerto.
app.listen(envs.port,() => {
    console.log(`Servidor ejecutandose en el puerto: ${envs.port}.`)
})
