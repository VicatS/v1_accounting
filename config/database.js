const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL = require('./properties').DB;

//custom console
const connected = chalk.bold.cyan;
const error = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = () => {
    mongoose.connect(dbURL, { useNewUrlParser: true })
        .then(() => console.log(connected('Mongo connected! on', dbURL)))
        .catch(err => console.log(error(`Connection has error ${ err }`)))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongosse is disconnected');
            process.exit(0);
        });
    });
}