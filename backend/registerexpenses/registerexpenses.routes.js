const Registerexpenses = require('./registerexpenses.controller');

module.exports = (router) => {
    router.post('/registerexpense', Registerexpenses.createRegisterexpense);
    router.get('/registerexpenses', Registerexpenses.getRegisterexpenses);
}