const { Router } = require('express');
const {createOrder1, captureOrder, cancelPayment, createOrder2, createOrder3, createOrder4} = require('../handlers/paymentHandlers')

const router = Router();



router.post('/createOrder1', createOrder1  )
router.post('/createOrder2', createOrder2 )
router.post('/createOrder3', createOrder3  )
router.post('/createOrder4', createOrder4  )
router.get('/captureOrder', captureOrder )
router.get('/cancelOrder', cancelPayment )





module.exports = router;