const Doctypes = require('./doctypes.controller');
module.exports = (router) => {
    router.post('/doctype/add', Doctypes.createDoctype);
    router.get('/doctypes', Doctypes.getDoctypes);
    router.get('/doctype/:id', Doctypes.getDoctype);
    router.put('/doctype/update/:id', Doctypes.updateDoctype);
    router.delete('/doctype/delete/:id', Doctypes.deleteDoctype);
}