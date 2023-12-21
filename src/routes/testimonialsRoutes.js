const { Router } = require('express');
const {createTestimonialsHandler} = require('../handlers/testimonialsHandlers')
const {getTestimonialsHandler} = require('../handlers/testimonialsHandlers')


const router = Router();




router.post('/', createTestimonialsHandler )
router.get('/', getTestimonialsHandler)







module.exports = router;