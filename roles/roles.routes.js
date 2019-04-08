const Roles = require('./roles.controller');
module.exports = (router) => {
    router.post('/roles/add', Roles.createRole);
    router.get('/roles', Roles.getRoles);
    router.get('/roles/:id', Roles.getRole);
    router.put('/roles/update/:id', Roles.updateRole);
    router.delete('/roles/delete/:id', Roles.deleteRole);
}