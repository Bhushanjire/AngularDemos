import mongoose = require('mongoose');
import DataAccess = require('../DataAccess');
import IUserModel = require('../../model/interfaces/UserModel');

let Mongoose = mongoose.Schema;

const UserSchema = new Mongoose(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        mobileNo: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique : true,
            required: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        token: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date
        }
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

UserSchema.pre("save", function (next) {
    console.log("Pre Save Called");
    next();

});

UserSchema.post("save", function (doc, next) {
    console.log("Post Save Called");
    next();
});

const handleE11000 = (error: any, res: any, next: any) => {
    if (error.name === "MongoError" && error.code === 11000) {
        next(new Error("There was a duplicate key error"));
    } else {
        next();
    }
};

UserSchema.post("save", handleE11000);
UserSchema.post("update", handleE11000);
UserSchema.post("findOneAndUpdate", handleE11000);
UserSchema.post("insertMany", handleE11000);

let User = DataAccess.mongoosConnection.model<IUserModel>("User", UserSchema);

export = User;