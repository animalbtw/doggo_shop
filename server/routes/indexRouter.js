const Router = require('express');
const router = new Router();
const feedRouter = require('./feedRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');

router.use('/user', userRouter)
router.use('/feed', feedRouter)
router.use('/type', typeRouter)

module.exports = router