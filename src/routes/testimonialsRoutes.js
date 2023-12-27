const { Router } = require('express');
const {createTestimonialsHandler, deleteTestimonialByIdHandler} = require('../handlers/testimonialsHandlers')
const {getTestimonialsHandler} = require('../handlers/testimonialsHandlers')


const router = Router();




router.post('/', createTestimonialsHandler )
router.get('/', getTestimonialsHandler)
router.delete("/:idTestimonial", deleteTestimonialByIdHandler);







module.exports = router;