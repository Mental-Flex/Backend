const { Router } = require('express');
const {getCategoriesHandler, createCategoriesHandler, deleteCategoryByIdHandler} = require('../handlers/categoryHandlers')

const router = Router();



router.get('/', getCategoriesHandler)
router.post('/', createCategoriesHandler)
router.delete("/:idCategory", deleteCategoryByIdHandler);






module.exports = router;