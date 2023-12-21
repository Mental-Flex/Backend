const Testimonials = require('../models/Testimonials')


const createTestimonials =  async (description, score) => {
    const newTestimonial = new Testimonials({
     
        description,
        score
       
    })

    return await newTestimonial.save()
}

const getAllTestimonials = async () => {
    const allTestimonials= await Testimonials.find()
    return allTestimonials
}

module.exports = {
    createTestimonials,
    getAllTestimonials
}