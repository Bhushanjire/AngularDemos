import mongoose = require("mongoose");

import RepositoryBase = require('../base');
import IUserModel = require('../../model/interfaces/UserModel');
import UserSchema = require('../../dataAccess/schemas/UserSchecma');

class UserRepository extends RepositoryBase<IUserModel>{
    constructor() {
        super(UserSchema);
    }

}

Object.seal(UserRepository);
export = UserRepository;