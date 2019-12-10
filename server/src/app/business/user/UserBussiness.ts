import IUserBusiness = require('../interfaces/UserBusiness');
import IUserModel = require('../../model/interfaces/UserModel');
import UserRepository = require('../../repository/user/UserRepository');
class UserBusiness implements IUserBusiness {
    private _UserRepository: UserRepository

    constructor() {
        this._UserRepository = new UserRepository();
    }

    create(user: IUserModel, callback: (error: any, result: any) => void) {
        this._UserRepository.create(user, (error, result) => {
            if (error)
                callback(error, null);
            else
                callback(null, result);
        });
    }

    retrieve(callback: (error: any, result: any) => void) {
        callback(null, null);
    }

    delete(id: string, callback: (error: any, result: any) => void) {
        callback(null, null);
    }

    update(_id: string, item: IUserModel, callback: (error: any, result: any) => void) {
        callback(null, null);
    }

    findById(id: string, callback: (error: any, result: any) => void) {
        callback(null, null);
    }
}

Object.seal(UserBusiness);
export = UserBusiness;
