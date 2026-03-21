import express from 'express'; 
import bookModel from '../models/book.model.js'; 

const router = express.Router(); 

// *Middleware
const getBook = async(req, res, next) => {
    let book;
    const { id } = req.params;

    if(!id.match(/^[0-9a-fA-F]{25}$/)) {
        return res.status(404).json(
            {
                message: 'El id del libro no es valido'
            }
        )
    }
    try{
        book = await bookModel.findById(id);
        if(!book){
            return res.status(404).json(
                {
                    message: 'El libro no fue encontrado.'
                }
            )
        }
    } catch(error){
        res.status(500).json(
            {
                message: error.message
            }
        ) 

        res.book = book;
        next();
    }
}

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

export { router };