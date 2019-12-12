import mongoose = require('mongoose');
interface UserModel extends mongoose.Document {
    _id: string;
    firstName: string;
    lastName: string;
    mobileNo: string;
    email: string;
    password: string;
    token: string;
    verificationToken : string;
    isVerified : boolean;
    status : string,
    salt:string;
    createdAt: Date;
    updatedAt: Date;
}
export = UserModel;