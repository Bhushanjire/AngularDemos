import express = require('express');
const router = express.Router();
const airthmetic = require('../../../app/custom-module/airthmetic-opp');
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
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;
