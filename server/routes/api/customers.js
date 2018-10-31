const express = require('express');
const router = express.Router();

const customer_controller = require('../../controllers/api/customers');

//GET
router.get('/customers/:userid', customer_controller.customer_get);


//POST
router.post('/customers/:userid', customer_controller.customer_add);


//PUT
router.put('/customers/:custid', customer_controller.customer_update);


//DELETE
router.delete('/customers/:custid', customer_controller.customer_remove);


module.exports = router;