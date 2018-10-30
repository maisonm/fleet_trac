const express = require('express');
const router = express.Router();

const user_controller = require('../../controllers/api/users');
const customer_controller = require('../../controllers/api/customers');

//GET
router.get('/customers/:userid', customer_controller.customer_get);
router.get('/fleet/:custid', customer_controller.customer_get_fleet)

//POST
router.post('/accounts/login', user_controller.user_login);
router.post('/accounts', user_controller.user_signup);
router.post('/customers/:userid', customer_controller.customer_add);
router.post('/fleet/:custid', customer_controller.customer_add_fleet);

//PUT
router.put('/accounts/:userid', user_controller.user_update);
router.put('/customers/:custid', customer_controller.customer_update);
router.put('/fleet/:equipmentid', customer_controller.customer_update_fleet);

//DELETE
router.delete('/customers/:custid', customer_controller.customer_remove);
router.delete('/fleet/:equipmentid', customer_controller.customer_remove_fleet);
router.delete('/accounts/:userid', user_controller.user_remove);


module.exports = router;


/// CUSTOMER FLEET UPDATE ROUTE BEING USED FOR TESTING!!!