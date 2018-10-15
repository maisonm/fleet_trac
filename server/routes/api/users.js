const express = require('express');
const router = express.Router();

const user_controller = require('../../controllers/api/users');

router.get('/account', user_controller.user_login);

module.exports = router;