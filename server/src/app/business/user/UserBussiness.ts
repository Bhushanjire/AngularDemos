import IUserBusiness = require('../interfaces/UserBusiness');
import IUserModel = require('../../model/interfaces/UserModel');
import UserRepository = require('../../repository/user/UserRepository');
const jwt = require('jsonwebtoken');
class UserBusiness implements IUserBusiness {
    private _UserRepository: UserRepository

    constructor() {
        this._UserRepository = new UserRepository();
    }

    create(user: IUserModel, callback: (error: any, result: any) => void) {
        this._UserRepository.create(user, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._UserRepository.retrieve(callback);
    }

    delete(id: string, callback: (error: any, result: any) => void) {
        this._UserRepository.delete(id, callback);
    }

    update(_id: any, item: IUserModel, callback: (error: any, result: any) => void) {
        this._UserRepository.update(_id, item, callback)
    }

    findById(id: string, callback: (error: any, result: any) => void) {
        this._UserRepository.findById(id, callback);
    }

    findByToken(token: string, callback: (error: any, result: any) => void) {
        this._UserRepository.findById(token, callback);
    };

    login(username: string, password: string, callback: (error: any, result: any) => void) {
        this._UserRepository.login(username, password, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                const payload = { _id: result._id };
                const options = { expiresIn: '1d', issuer: 'myProject' };
                const secret = 'Bhushan';
                const token = jwt.sign(payload, secret, options);
                const userDetail = {
                    _id: result._id,
                    name: result.name,
                    mobileNo: result.mobileNo,
                    email: result.email,
                    password: result.password,
                    token: token
                }
                callback(null, userDetail)
            }
        });
    }
}

Object.seal(UserBusiness);
export = UserBusiness;
