const express = require('express');
const router = express.Router();

const user_controller = require('../../controllers/api/users');
const customer_controller = require('../../controllers/api/customers');

router.get('/account', user_controller.user_login);

router.post('/account/new', user_controller.user_signup);

router.post('/:id/customer/new', customer_controller.customer_add);

module.exports = router;