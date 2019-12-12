import IUserModel = require('../interfaces/UserModel');

class UserModel {
    private _userModel: IUserModel;

    constructor(private userModel: IUserModel) {
        this._userModel = userModel;
    }

    get id(): string {
        return this._userModel._id;
    }

    get firstName(): string {
        return this._userModel.firstName;
    }
    get lastName(): string {
        return this._userModel.lastName;
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

    get isVerified(): boolean {
        return this._userModel.isVerified;
    }

    get status(): string {
        return this._userModel.status;
    }

    get createAt(): Date {
        return this._userModel.createdAt;
    }

    get updateAt(): Date {
        return this._userModel.updatedAt;
    }
}