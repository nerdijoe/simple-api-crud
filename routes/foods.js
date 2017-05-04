var express = require('express');
var router = express.Router();
var food_controller = require('../controllers/foodController')

router.post('/', food_controller.create);
router.get('/', food_controller.get_foods);
router.get('/:id', food_controller.get_food);
router.put('/:id', food_controller.update);
router.delete('/:id', food_controller.delete);

module.exports = router;
