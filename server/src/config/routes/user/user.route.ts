import express = require('express');
const router = express.Router();
import UserController = require('../../../controller/User/UserController');

class UserRoutes {
    private _UserController: UserController;

    constructor() {
        this._UserController = new UserController();
    }

    get Routes() {
        const controller = this._UserController;
    
        router.post('/createUser', controller.create);
        router.get('/allUsers', controller.retrieve);
        router.put('/updateUser', controller.update);
        router.post('/getUserById', controller.findById);
        router.delete('/deleteUser', controller.delete);
        router.post('/login', controller.login);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;
