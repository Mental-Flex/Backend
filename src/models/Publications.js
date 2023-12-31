const { Schema, model} = require('mongoose') 

const publicationSchema = new Schema({
    name : {
        type: String,
        require: true
    },
  
    category: {
        type: Array,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    
    image: {
        type: String
    },
    
})

module.exports = model('publication', publicationSchema)