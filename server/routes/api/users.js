const express = require('express');
const router = express.Router();

const user_controller = require('../../controllers/api/users');
const customer_controller = require('../../controllers/api/customers');

//GET
router.post('/accounts/login', user_controller.user_login);

//POST
router.post('/accounts', user_controller.user_signup);
router.post('/customers/:userid', customer_controller.customer_add);
router.post('/customers/:custid/fleet', customer_controller.customer_add_fleet);

//PUT

//DELETE
router.delete('/customers/:custid', customer_controller.customer_remove);
router.delete('/customers/:custid/fleet/:equipmentid', customer_controller.customer_remove_fleet);
router.delete('/accounts/:userid', user_controller.user_remove);


module.exports = router;