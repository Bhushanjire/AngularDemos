import mongoose = require('mongoose');
interface UserModel extends mongoose.Document {
    _id: string;
    name: string;
    mobileNo: string;
    email: string;
    password: string;
    token: string;
    createdAt: Date;
    updatedAt: Date;
}
export = UserModel;