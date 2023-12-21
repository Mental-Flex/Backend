const { Router } = require('express');
const {createOrder, captureOrder, cancelPayment} = require('../handlers/paymentHandlers')

const router = Router();



router.get('/createOrder', createOrder  )
router.get('/captureOrder', captureOrder )
router.get('/cancelOrder', cancelPayment )





module.exports = router;