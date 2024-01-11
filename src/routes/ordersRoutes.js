const { Router } = require('express');
const { getOrdersHandler } = require('../handlers/ordersHandlers');


const router = Router();



router.get('/', getOrdersHandler)







module.exports = router;