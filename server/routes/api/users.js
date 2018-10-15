const express = require('express');
const router = express.Router();

const user_controller = require('../../controllers/api/users');

router.get('/account', user_controller.user_login);

router.post('/account/new', user_controller.user_signup);

module.exports = router;