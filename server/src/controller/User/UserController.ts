import express = require('express');
// import dbo = require('../../app/db/index');
import IUserModel = require('../../app/model/interfaces/UserModel');
import UserModel = require('../../app/model/user/UserModel');
import IBaseController = require('../interfaces/base');
import UserBusiness = require('../../app/business/user/UserBussiness');
import { IResponceFormat } from "../interfaces/comman/ResponceFormat";
import Utility from '../_helper/utility';
import User = require('../../app/dataAccess/schemas/UserSchecma');

// class UserController implements IBaseController<UserBusiness> {

class UserController implements IBaseController<any> {
    // private _responseFormat: IResponceFormat;
    create(request: express.Request, responce: express.Response): void {
        try {
            const user: IUserModel = <IUserModel>request.body;
            const userBusiness = new UserBusiness();
            userBusiness.create(user, (error, result) => {
                if (error){
                    responce.status(500).send(Utility.generateResponse(404, error, false, null))
                }
                else{
                    responce.status(200).send(Utility.generateResponse(200, 'User Created', true, result));
                }

            });
        } catch (error) {
            responce.status(500).send(Utility.generateResponse(404, 'Database error', false, error))
        }
    }

    retrieve(request: express.Request, response: express.Response): void {
    }

    update(request: express.Request, response: express.Response): void {

    }

    findById(request: express.Request, response: express.Response): void {

    }

    delete(request: express.Request, response: express.Response): void {

    }

}
export = UserController;