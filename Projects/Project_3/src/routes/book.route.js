import express from 'express'; 
import bookModel from '../models/book.model.js'; 

const router = express.Router(); 

// *Middleware
const getBook = async(req, res, next) => {
    let book;
    const { id } = req.params;

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
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
        res.book = book;
        next();
    } catch(error){
        res.status(500).json(
            {
                message: error.message
            }
        ) 
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

    if(!title || !author || !genre || !publication_date){ 
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

router.get('/:id', getBook, async(req, res) => {
    res.json(res.book);
})

router.put('/:id', getBook, async(req, res) => {
    try{
        const book = res.book;
        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.genre = req.body.genre || book.genre;
        book.publication_date = req.body.publication_date || book.publication_date;    
        
        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch{
        res.status(400).json(
            {
                message: error.message
            }
        )
    }
})

router.patch('/:id', getBook, async(req, res) => {
    if(!req.body.title && !req.body.author && !req.body.genre && !req.body.publication_date){
        res.status(400).json(
            {
                message: 'Al menos uno de estos apartados debe ser enviado: titulo, autor, genero o fecha de publicacion.'
            }
        )
    }

    try{
        const book = res.book;
        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.genre = req.body.genre || book.genre;
        book.publication_date = req.body.publication_date || book.publication_date;    
        
        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch{
        res.status(400).json(
            {
                message: error.message
            }
        )
    }
})

router.delete('/:id', getBook, async(req, res) => {
    try{
        const book = res.book;
        await book.deleteOne({
            _id: book._id
        });
        res.json(
            {
                message: 'El libro fue eliminado correctamente.'
            }
        )
    } catch(error){
        res.status(500).json(
            {
                message: error.message
            }
        )
    }
})

export { router };



