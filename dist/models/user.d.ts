import mongoose from "mongoose";
interface IUser {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    booksAdded?: string[];
    role: string;
}
declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
export { User, IUser };
//# sourceMappingURL=user.d.ts.map