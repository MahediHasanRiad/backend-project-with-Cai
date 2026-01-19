import { books } from "../Data/books.js";
import { Book } from "../models/book.model.js";
import { Author } from "../models/author.model.js";

export const booksController = async (req, res) => {
  try {
    const { title, genre, authorName } = req.body;

    if ([title, genre, authorName].some((item) => item === " ")) {
      return res.status(400).json({ message: "all field are required" });
    }

    // check author exist or not
    const author = await Author.findOne({authorName});

    if (!author) return res.status(400).json({ message: "author not found" });

    const books = await Book.create({
      title: title,
      genre: genre,
      author: author._id,
    });

    return res.status(200).json({message: 'success', books})
  } 
  catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
