import express = require('express');

import UserRoutes = require('../../routes/user/user.route');

const app = express();
const apiVersion = '/api/v1';

class BaseRoutes{
    get routes(){
        app.use(new UserRoutes().Routes);
        return app;
    }
}

export = BaseRoutes;