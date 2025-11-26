import mongoose from "mongoose";
interface IBook {
    name: string;
    author: string;
    publishedYear: number;
    description: string;
}
declare const Book: mongoose.Model<IBook, {}, {}, {}, mongoose.Document<unknown, {}, IBook, {}, {}> & IBook & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export default Book;
//# sourceMappingURL=book.d.ts.map