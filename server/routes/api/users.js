const express = require('express');
const router = express.Router();

const user_controller = require('../../controllers/api/users');


//POST
router.post('/accounts', user_controller.user_signup);
router.post('/accounts/login', user_controller.user_login);


//PUT
router.put('/accounts/:userid', user_controller.user_update);


//DELETE
router.delete('/accounts/:userid', user_controller.user_remove);


module.exports = router;
