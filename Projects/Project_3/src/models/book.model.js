import  mongoose from "mongoose";

const bookModel = new mongoose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        publication_date: String
    }
)

export default mongoose.model('book', bookModel);