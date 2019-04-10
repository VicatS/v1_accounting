'use strict'
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
//importacion de rutas
const usersRoutes = require('./users/users.routes');
const rolesRoutes = require('./roles/roles.routes');
const expensesRoutes = require('./expenses/expenses.routes');
const distributorRoutes = require('./distributors/distributors.routes');
const doctypesRoutes = require('./doctypes/doctypes.routes');
const registerexpenseRoutes = require('./registerexpenses/registerexpenses.routes');
const db = require('./config/database');
//Init DB
db();
//cors

//todas las peticiones del lado del clienet
const app = express();
const router = express.Router();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
//app.use(cors({ origin: 'http://localhost:4200' }));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Init Routes

app.use('/api', router);
//lamado de rutas
usersRoutes(router);
rolesRoutes(router);
expensesRoutes(router);
distributorRoutes(router);
doctypesRoutes(router);
registerexpenseRoutes(router);

app.use(router);

app.listen(properties.PORT, () => console.log(`Server is running on ${ properties.PORT }`));