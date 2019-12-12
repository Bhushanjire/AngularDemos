import IUserBusiness = require('../interfaces/UserBusiness');
import IUserModel = require('../../model/interfaces/UserModel');
import UserRepository = require('../../repository/user/UserRepository');
import CommonHelper = require('../../repository/_helpers/common.helper');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
interface Ihash {
    password: string;
    salt: string;
}

class UserBusiness implements IUserBusiness {
    private _UserRepository: UserRepository
    saltLength: number = 10;

    constructor() {
        this._UserRepository = new UserRepository();
    }

    create(user: IUserModel, callback: (error: any, result: any) => void) {
        const hash = this.saltHashPassword(user.password);
        user.password = hash.password;
        user.salt = hash.salt;
        this._UserRepository.create(user, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                const verificationToken = result.verificationToken = crypto.randomBytes(16).toString('hex')
                const userDetail = {
                    _id: result._id,
                    verificationToken: verificationToken
                }

                this.updateToken(userDetail, (error: any, result: any) => {
                    const emailBody = 'Hello,\n\n' + 'Please verify your account by clicking the link:' + 'http://localhost:3000/verifyUserAccount/' + verificationToken + '\n';

                    if (error) {
                        callback(error, null);
                    } else {
                        callback(null, result);
                    }

                    // CommonHelper.default.sendEmail(result.email, 'Account Verification Email', emailBody, (error, result) => {
                    //     if (error) {
                    //         callback(error, null);
                    //     } else {
                    //         callback(null, result);
                    //     }
                    // });
                });
            }
        });
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
        this._UserRepository.findByToken(token, callback);
    };

    login(username: string, password: string, callback: (error: any, result: any) => void) {
        this._UserRepository.login(username, password, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                if (result) {
                    const userPassword: Ihash = this.hashPasswordWithSalt(password, result.salt);
                    if (userPassword.password === result.password) {
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
                        this.updateToken(userDetail, (error: any, result: any) => {
                            if (error) {
                                callback(null, null);
                            } else {
                                callback(null, userDetail)
                            }
                        });

                    } else {
                        callback(null, null);
                    }
                } else {
                    callback(null, null)
                }
            }
        });
    }

    saltHashPassword(password: string) {
        const salt: string = this.getSalt();
        return this.hashPasswordWithSalt(password, salt);
    }

    getSalt() {
        return crypto.randomBytes(this.saltLength).toString('Hex');
    }

    hashPasswordWithSalt(password: string, salt: string) {

        let hashedPassword = crypto.createHmac('sha512', salt);
        hashedPassword.update(password);
        hashedPassword = hashedPassword.digest('Hex');
        const encryptedValues: Ihash = {
            salt: salt,
            password: hashedPassword
        };
        return encryptedValues;
    }

    updateToken(userDetail: any, callback: (error: any, result: any) => void) {
        this._UserRepository.update(userDetail._id, userDetail, callback);
    }

    verifyAccount(verificationToken: any, callback: (error: any, result: any) => void) {
        this._UserRepository.verifyAccount(verificationToken, (error: any, result: any) => {
            const userDetail: any = {
                isVerified: true
            }
            this._UserRepository.update(result._id, userDetail, callback);
        });
    }
}

Object.seal(UserBusiness);
export = UserBusiness;
