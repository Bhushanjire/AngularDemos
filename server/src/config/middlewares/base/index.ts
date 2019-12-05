import express = require('express');
import bodyParser = require('body-parser');
import BaseRoutes = require('../../routes/base/');

class MiddlewareBase {
    static get configuration() {
        var app = express();
        app.use(bodyParser.urlencoded({
            extended: true,
        }));
        app.use(bodyParser.json());
        app.use(new BaseRoutes().routes);
        return app;
    }
}
Object.seal(MiddlewareBase);
export = MiddlewareBase;