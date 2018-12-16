const express = require('express');
const router = express.Router();

const fleet_controller = require('../../controllers/api/fleets');

//GET
//Returns all fleets that belong to single customer
router.get("/:custid/customer", fleet_controller.fleet_get_all_customer);
//Returns all fleets that belong to all of a single User's customers
router.get("/:userid/user", fleet_controller.fleet_get_all_user);


//POST
router.post('/:custid', fleet_controller.fleet_add);

//PUT
router.put('/:equipmentid', fleet_controller.fleet_update);

//DELETE
router.delete('/:equipmentid', fleet_controller.fleet_remove);

module.exports = router;