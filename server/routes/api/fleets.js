const express = require('express');
const router = express.Router();

const fleet_controller = require('../../controllers/api/fleets');

//verifyToken authorizes a user's JWT token to grant access to the route
const verifyToken = require('../../utils/verify_jwt_token');

//GET
//Returns all fleets that belong to single customer
router.get("/:custid/customer", verifyToken, fleet_controller.fleet_get_all_customer);
//Returns all fleets that belong to all of a single User's customers
router.get("/:userid/user", verifyToken, fleet_controller.fleet_get_all_user);

//POST
router.post('/:custid', verifyToken, fleet_controller.fleet_add);

//PUT
router.put('/:equipmentid', verifyToken, fleet_controller.fleet_update);

//DELETE
router.delete('/:equipmentid', verifyToken, fleet_controller.fleet_remove);

module.exports = router;