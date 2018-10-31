const express = require('express');
const router = express.Router();

const fleet_controller = require('../../controllers/api/fleets');

//GET
router.get('/fleet/:custid', fleet_controller.fleet_get);

//POST
router.post('/fleet/:custid', fleet_controller.fleet_add);

//PUT
router.put('/fleet/:equipmentid', fleet_controller.fleet_update);

//DELETE
router.delete('/fleet/:equipmentid', fleet_controller.fleet_remove);

module.exports = router;