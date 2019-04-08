const Users = require('./users.controller');
module.exports = (router) => {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
    router.get('/users', Users.getUsers);
    router.get('/user/:id', Users.getUser);
    router.put('/update/:id', Users.updateUser);
    router.delete('/delete/:id', Users.deleteUser);
}