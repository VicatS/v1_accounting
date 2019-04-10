const Users = require('./users.controller');
module.exports = (router) => {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
    router.get('/users', Users.getUsers);
    router.get('/user/:id', Users.getUser);
    router.put('/user/update/:id', Users.updateUser);
    router.delete('/user/delete/:id', Users.deleteUser);
}