const mongoose = require('mongoose')

const URI= 'mongodb+srv://sofiavictoriafranco:12345@mentalflex.hkkjzxj.mongodb.net/'

mongoose.connect(URI, {
    
   
})
    .then(db => console.log('Database is connect'))
    .catch(err => console.log(err))
    