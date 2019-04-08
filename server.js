const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
//importacion de rutas
const usersRoutes = require('./users/users.routes');
const rolesRoutes = require('./roles/roles.routes');
const expensesRoutes = require('./expenses/expenses.routes');
const db = require('./config/database');

//Init DB
db();
//cors

//todas las peticiones del lado del clienet


const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
const app = express();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(cors());
//Init Routes
const router = express.Router();
app.use('/api', router);
//lamado de rutas
usersRoutes(router);
rolesRoutes(router);
expensesRoutes(router);

app.listen(properties.PORT, () => console.log(`Server is running on ${ properties.PORT }`));