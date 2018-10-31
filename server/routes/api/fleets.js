const express = require('express');
const router = express.Router();

const fleet_controller = require('../../controllers/api/fleets');

//GET
//Returns an array of fleets that belong to the customer id
router.get('/:custid', fleet_controller.fleet_get);

//POST
router.post('/:custid', fleet_controller.fleet_add);

//PUT
router.put('/:equipmentid', fleet_controller.fleet_update);

//DELETE
router.delete('/:equipmentid', fleet_controller.fleet_remove);

module.exports = router;