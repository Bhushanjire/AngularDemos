import IUserModel = require('../interfaces/UserModel');

class UserModel {
    private _userModel: IUserModel;

    constructor(private userModel: IUserModel) {
        this._userModel = userModel;
    }

    get id(): string {
        return this._userModel._id;
    }

    get name(): string {
        return this._userModel.name;
    }

    get mobileNo(): string {
        return this._userModel.mobileNo;
    }

    get email(): string {
        return this._userModel.email;
    }

    get password(): string {
        return this._userModel.password;
    }

    get token(): string {
        return this._userModel.token;
    }

    get createAt(): Date {
        return this._userModel.createAt;
    }

    get updateAt(): Date {
        return this._userModel.updateAt;
    }
}