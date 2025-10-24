import mongoose from "mongoose";

interface IBook {
  name:string,
  author:string,
  publishedYear:number,
  description:string
}

const bookSchema = new mongoose.Schema<IBook>({
    name: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    description: { type: String, required: true },
  });

const Book = mongoose.model<IBook>("Book", bookSchema);
export default Book;