const { Schema, model} = require('mongoose') 

const testimonialsSchema = new Schema({
 
    description: {
        type: String
    },
    name: {
        type: String
        
    }
    
})

module.exports = model('testimonials', testimonialsSchema)