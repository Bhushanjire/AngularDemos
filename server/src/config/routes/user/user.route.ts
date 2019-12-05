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
        // router.get('/', function (req: any, res: any) {
        //     res.send('Hello World 12345');
        // });

        router.post('/createUser', controller.create);

        // router.post('/substract', function (req: any, res: any) {
        //     let value1 = req.body.value1 ? req.body.value1 : 0;
        //     let value2 = req.body.value2 ? req.body.value2 : 0
        //     let result = {
        //         "substract": airthmetic.substract(value1, value2)
        //     }
        //     res.send(result)
        // });
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;
