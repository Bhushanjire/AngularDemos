import mongoose = require("mongoose");

import RepositoryBase = require('../base');
import IUserModel = require('../../model/interfaces/UserModel');
import UserSchema = require('../../dataAccess/schemas/UserSchecma');

class UserRepository extends RepositoryBase<IUserModel>{
    constructor() {
        super(UserSchema);
    }

    login(username: string, password: string, callback: (error: any, result: any) => void) {
        UserSchema.findOne({
            email: username
        }, callback);
    }

    findByToken(token: string, callback: (error: any, result: IUserModel) => void) {
        UserSchema.findOne({ token : token }, callback);
    }
}

Object.seal(UserRepository);
export = UserRepository;