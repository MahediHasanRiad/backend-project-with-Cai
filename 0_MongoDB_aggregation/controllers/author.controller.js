import { Author } from "../models/author.model.js";
import { author } from "../Data/author.js";

export const authorController = async (req, res) => {
  try {
    await Author.insertMany(author, {
      ordered: true, // stop on first error
      runValidators: true, // enforce schema validation
    });

    return res.status(200).json({ message: "all author inserted", author });
  } 
  catch (error) {
    console.log(error);
  }
};
