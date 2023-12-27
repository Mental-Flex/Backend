
const Category = require('../models/Category')
const { ObjectId } = require('mongodb');

const createCategory = async (name) => {
    const newCategory = new Category({
        name
    })
    return await newCategory.save()
}

const getAllCategories = async () => {
    const allCategory = await Category.find()
    return allCategory
}

const deleteCategoryById = async (idCategory) => {
  
    const filtro = { _id: new ObjectId(idCategory) };
  
    const resultado = await Category.deleteOne(filtro);
  
    if (resultado.deletedCount === 0) {
      throw new Error('El testimonio no pudo ser encontrado o ya fue eliminado.');
    }
  
    return { mensaje: 'Testimonio eliminada exitosamente' };
  };

module.exports = {
    createCategory,
    getAllCategories,
    deleteCategoryById

}