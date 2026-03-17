import express from 'express'; 
import bookModel from '../models/book.model.js'; 

const router = express.Router(); 

// *Obtener todos los libros. [GET]
router.get('/', async (req, res) => { 
    try{ 
        const books = await bookModel.find(); 
        console.log('GET ALL ', books);

        if(books.length === 0) return res.status(204).json();
        res.json(books)

    } catch(error){ 
        res.status(500).json({message: error.message});
    }
})


// *Crear un nuevo libro. [POST]
router.post('/', async (req, res) => {
    const { title, author, genre, publication_date } = req?.body;

    if(!(title || author || genre || publication_date)){ 
        return res.status(400).json({ 

            message: 'Los campos de titulo, autor, genero y fecha de publicacion son obligatorios.' 
        })
    }

    const book = new bookModel( 
        {
            title, 
            author,
            genre, 
            publication_date
        }
    )

    try{ 
        const newBook = await book.save();
        res.status(201).json(newBook); 
        console.log(newBook); 
    } catch(error){ 
        res.status(400).json({ 
            message: error.message
        })
    }
})