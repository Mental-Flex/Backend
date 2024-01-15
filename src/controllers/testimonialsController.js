const Testimonials = require('../models/Testimonials')
const { ObjectId } = require('mongodb');


const createTestimonials =  async (description, name, image, instagram, link) => {
    const newTestimonial = new Testimonials({
     
        description,
        name,
        image,
        instagram,
        link
       
    })

    return await newTestimonial.save()
}

const getAllTestimonials = async () => {
    const allTestimonials= await Testimonials.find()
    return allTestimonials
}

const deleteTestimonialById = async (idTestimonial) => {
  
    const filtro = { _id: new ObjectId(idTestimonial) };
  
    const resultado = await Testimonials.deleteOne(filtro);
  
    if (resultado.deletedCount === 0) {
      throw new Error('El testimonio no pudo ser encontrado o ya fue eliminado.');
    }
  
    return { mensaje: 'Testimonio eliminada exitosamente' };
  };

module.exports = {
    createTestimonials,
    getAllTestimonials,
    deleteTestimonialById
}