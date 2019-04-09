const Roles = require('./roles.controller');
module.exports = (router) => {
    router.post('/role/add', Roles.createRole);
    router.get('/roles', Roles.getRoles);
    router.get('/role/:id', Roles.getRole);
    router.put('/role/update/:id', Roles.updateRole);
    router.delete('/role/delete/:id', Roles.deleteRole);
}