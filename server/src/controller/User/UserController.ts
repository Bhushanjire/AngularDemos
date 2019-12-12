import express = require('express');
// import dbo = require('../../app/db/index');
import IUserModel = require('../../app/model/interfaces/UserModel');
import UserModel = require('../../app/model/user/UserModel');
import IBaseController = require('../interfaces/base');
import UserBusiness = require('../../app/business/user/UserBussiness');
import { IResponceFormat } from "../interfaces/comman/ResponceFormat";
import Utility from '../_helper/utility';
import User = require('../../app/dataAccess/schemas/UserSchecma');
import { stringify } from 'querystring';

class UserController implements IBaseController<UserBusiness> {
    // private _responseFormat: IResponceFormat;



    create(request: express.Request, responce: express.Response): void {
        try {
            const user: IUserModel = <IUserModel>request.body;
            let userBusiness = new UserBusiness();
            userBusiness.create(user, (error, result) => {
                if (error) {
                    if (error.toString() === 'Error: There was a duplicate key error') {
                        responce.status(500).send(Utility.generateResponse(404, 'Email-ID already exist,Please try another email-ID', false, null))
                    } else {
                        responce.status(500).send(Utility.generateResponse(404, error.toString(), false, null))
                    }
                }
                else {
                    responce.status(200).send(Utility.generateResponse(200, 'Singup successfully', true, 'Please check your email for account verification'));
                }

            });
        } catch (error) {
            responce.status(500).send(Utility.generateResponse(404, 'Database error', false, error))
        }
    }

    retrieve(request: express.Request, responce: express.Response): void {
        try {
            let userBusiness = new UserBusiness();
            userBusiness.retrieve((error, result) => {
                if (error) {
                    responce.status(500).send(Utility.generateResponse(404, error.toString(), false, null));
                } else {
                    responce.status(200).send(Utility.generateResponse(200, 'All Users', true, result));
                }
            });
        } catch (error) {
            console.log(error);

            responce.status(500).send(Utility.generateResponse(404, 'DB error while retriving the users', false, error))
        }
    }

    update(request: express.Request, responce: express.Response): void {
        try {
            const { _id, user } = request.body;
            let userBusiness = new UserBusiness();
            userBusiness.update(_id, user, (error, result) => {
                if (error) {
                    responce.status(500).send(Utility.generateResponse(404, error.toString(), false, null));
                } else {
                    responce.status(200).send(Utility.generateResponse(200, 'User updated', true, result));
                }
            });
        } catch (error) {
            responce.status(500).send(Utility.generateResponse(404, 'Database error', false, error));
        }
    }

    findById(request: express.Request, responce: express.Response): void {
        try {

            let id = request.body.id;
            let userBusiness = new UserBusiness();
            userBusiness.findById(id, (error, result) => {
                if (error) {
                    responce.status(500).send(Utility.generateResponse(404, error.toString(), false, null));
                } else {
                    responce.status(200).send(Utility.generateResponse(200, 'User Data', true, result));
                }
            });
        } catch (error) {
            responce.status(500).send(Utility.generateResponse(404, 'Database error', false, error));
        }
    }

    delete(request: express.Request, responce: express.Response): void {
        try {
            let id = request.body.id;
            let userBusiness = new UserBusiness();
            userBusiness.delete(id, (error, result) => {
                if (error) {
                    responce.status(500).send(Utility.generateResponse(404, error.toString(), false, null));
                } else {
                    responce.status(200).send(Utility.generateResponse(200, 'User deleted', true, result));
                }
            });
        } catch (error) {
            responce.status(500).send(Utility.generateResponse(404, 'Database error', false, error));
        }
    }

    login(request: express.Request, responce: express.Response): void {
        try {
            let userBusiness = new UserBusiness();
            userBusiness.login(request.body.username, request.body.password, (error: any, result: any) => {
                if (error) {
                    responce.status(500).send(Utility.generateResponse(404, error.toString(), false, null));
                } else {
                    if (result) {
                        responce.status(200).send(Utility.generateResponse(200, 'Login successfull', true, result));
                    } else {
                        responce.status(200).send(Utility.generateResponse(200, 'Wrong username/password', true, {}));
                    }
                }
            });
        } catch (error) {
            responce.status(500).send(Utility.generateResponse(404, 'Database user login error', false, error));
        }
    }

    verifyAccount(request: express.Request, responce: express.Response): void {
        const verificationToken = request.params;
        let userBusiness = new UserBusiness();
        userBusiness.verifyAccount(verificationToken, (error: any, result: any) => {
            if (error) {
                responce.status(500).send(Utility.generateResponse(404, error.toString(), false, null));
            } else {
                responce.status(200).send(Utility.generateResponse(200, 'Verification Done', true, {}));
            }
        });
    }

   


}
export = UserController;