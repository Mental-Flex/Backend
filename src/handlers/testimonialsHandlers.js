const {createTestimonials, deleteTestimonialById} = require('../controllers/testimonialsController')
const {getAllTestimonials} = require('../controllers/testimonialsController')
const { uploadImage } = require("../cloudinary");
const fs = require("fs-extra");

const createTestimonialsHandler = async (req, res) => {
    const { description, name, instagram, link} = req.body;
  
    try {

      const image = await uploadImage(req.file.path);
      
  
      const newTestimonial = await createTestimonials(
      
        description,
        name,
        image,
        instagram,
        link
       
      );

      await newTestimonial.save();
    await fs.unlink(req.file.path);
    res.status(201).json(newTestimonial);
  
      

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  const getTestimonialsHandler = async(req, res) => {

    try{

    const testimonials = await getAllTestimonials()

    res.status(200).json(testimonials)

    }catch(error){

        res.status(400).json({error: error.message})
    }

}


const deleteTestimonialByIdHandler = async (req, res) => {
  const { idTestimonial } = req.params;

  try {
    const resultado = await deleteTestimonialById(idTestimonial);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

  

module.exports = {
    createTestimonialsHandler,
    getTestimonialsHandler,
    deleteTestimonialByIdHandler
}