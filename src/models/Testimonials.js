const { Schema, model} = require('mongoose') 

const testimonialsSchema = new Schema({
 
    description: {
        type: String
    },
    score: {
        type: Number,
        default: true
    }
    
})

module.exports = model('testimonials', testimonialsSchema)