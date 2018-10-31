const express = require('express');
const router = express.Router();

const customer_controller = require('../../controllers/api/customers');

//GET
//Returns an array of customers belonging to a user id
router.get('/:userid', customer_controller.customer_get);


//POST
router.post('/:userid', customer_controller.customer_add);


//PUT
router.put('/:custid', customer_controller.customer_update);


//DELETE
router.delete('/:custid', customer_controller.customer_remove);


module.exports = router;