const express = require('express');
const router = express.Router();

const user_controller = require('../../controllers/api/users');
const customer_controller = require('../../controllers/api/customers');

router.get('/:id/account', user_controller.user_login);

router.post('/account', user_controller.user_signup);

router.post('/:id/customer', customer_controller.customer_add);

router.post('/:id/customer/:custid/fleet', customer_controller.customer_add_fleet);

module.exports = router;