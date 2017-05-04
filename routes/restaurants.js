var express = require('express');
var router = express.Router();
var resto_controller = require('../controllers/restaurantController')


/* GET users listing. */

router.post('/', resto_controller.create);
router.get('/', resto_controller.get_restos);
router.get('/:id', resto_controller.get_resto);
router.put('/:id', resto_controller.update);
router.delete('/:id', resto_controller.delete);

module.exports = router;
