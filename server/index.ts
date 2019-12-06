import express = require('express');
const airthmetic = require('./src/app/custom-module/airthmetic-opp');
import bodyParser = require("body-parser");
const app = express()
import UserRoutes = require('./src/config/routes/user/user.route');
import MiddlewareBase = require('./src/config/middlewares/base');
import dbo = require('./src/app/db');

app.use(MiddlewareBase.configuration);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})