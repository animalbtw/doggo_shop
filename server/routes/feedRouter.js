const Router = require('express');
const router = new Router();
const feedController = require('../controllers/feedController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), feedController.create)
router.get('/', feedController.getAll)
router.get('/:id', feedController.getOne)

module.exports = router