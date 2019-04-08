const Distributors = require('./distributors.controller');
module.exports = (router) => {
    router.post('/distributor/add', Distributors.createDistributor);
    router.get('/distributors', Distributors.getDistributors);
    router.get('/distributor/:id', Distributors.getDistributor);
    router.put('/distributor/update/:id', Distributors.updateDistributor);
    router.delete('/distributor/delete/:id', Distributors.deleteDistributor);
}