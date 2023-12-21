const {createTestimonials} = require('../controllers/testimonialsController')
const {getAllTestimonials} = require('../controllers/testimonialsController')

const createTestimonialsHandler = async (req, res) => {
    const { description, score} = req.body;
  
    try {
      
  
      const newTestimonial = await createTestimonials(
      
        description,
        score
       
      );
  
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
  

module.exports = {
    createTestimonialsHandler,
    getTestimonialsHandler
}