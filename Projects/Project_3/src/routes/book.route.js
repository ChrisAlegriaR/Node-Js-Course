import express from 'express'; // Importa Express para poder crear rutas y manejar peticiones HTTP.

import bookModel from '../models/book.model.js'; // Importa el modelo de Mongoose que representa la colección de libros en MongoDB.

const router = express.Router(); // Se crea una instancia de Router para definir rutas separadas del servidor principal.


// *Obtener todos los libros. [GET]
router.get('/', async (req, res) => { // Define una ruta GET en "/" que se ejecuta cuando alguien accede a /book.

    try{ // Se usa try para intentar ejecutar código que puede fallar (como una consulta a la base de datos).

        const books = await bookModel.find(); // Busca todos los documentos de la colección "books" usando Mongoose.

        console.log('GET ALL ', books) // Muestra en consola los libros obtenidos para verificar que la consulta funcionó.

        if(books.length === 0) return res.status(204).json() // Si no hay libros se responde con código 204 (No Content).

        res.json(books) // Envía al cliente los libros encontrados en formato JSON.

    } catch(error){ // Si ocurre un error en el try (ej. fallo en base de datos) se ejecuta este bloque.

        res.status(500).json({message: error.message}) // Responde con error 500 indicando un problema interno del servidor.
    }
})


// *Crear un nuevo libro. [POST]
router.post('/', async (req, res) => { // Define una ruta POST en "/" para crear nuevos libros.

    const { title, author, genre, publication_date } = req?.body; // Extrae los datos enviados por el cliente en el body.

    if(!(title || author || genre || publication_date)){ // Verifica si los datos requeridos están presentes.

        return res.status(400).json({ // Si falta algún dato responde con error 400 (Bad Request).

            message: 'Los campos de titulo, autor, genero y fecha de publicacion son obligatorios.' // Mensaje explicando el error.
        })
    }

    const book = new bookModel( // Se crea una nueva instancia del modelo "bookModel".

        {
            title, // Asigna el título recibido al campo "title".
            author, // Asigna el autor recibido al campo "author".
            genre, // Asigna el género recibido al campo "genre".
            publication_date // Asigna la fecha de publicación al campo correspondiente.
        }
    )

    try{ // Se intenta guardar el nuevo libro en la base de datos.

        const newBook = await book.save(); // Guarda el documento en MongoDB usando Mongoose.

        res.status(201).json(newBook); // Responde con código 201 indicando que el recurso fue creado.

        console.log(newBook); // Muestra en consola el libro que se guardó en la base de datos.

    } catch(error){ // Si ocurre un error al guardar el libro.

        res.status(400).json({ // Responde con error 400 indicando que la petición no pudo procesarse.

            message: error.message // Envía el mensaje de error generado.
        })
    }
})

export { router }; // Exporta el router para poder usarlo en app.js.