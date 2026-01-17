import { books } from "../Data/books.js";
import { Book } from "../models/book.model.js";

export const booksController = async (req, res) => {
  try {
    const book = await Book.insertMany(books);

    return res.status(200).json({ message: "add all Books",  book});
  } 
  catch (error) {
    console.log(error);
  }
};
