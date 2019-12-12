import express = require('express');
const router = express.Router();
import ValidateUser = require('../../middlewares/ValidateUser');
import UserController = require('../../../controller/User/UserController');

class UserRoutes {
    private _UserController: UserController;

    constructor() {
        this._UserController = new UserController();
    }

    get Routes() {
        const controller = this._UserController;
    
        router.post('/createUser', controller.create);
        router.get('/allUsers', ValidateUser.auth, controller.retrieve);
        router.put('/updateUser', ValidateUser.auth,controller.update);
        router.post('/getUserById', ValidateUser.auth,controller.findById);
        router.delete('/deleteUser', ValidateUser.auth,controller.delete);
        router.post('/login', controller.login);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;
