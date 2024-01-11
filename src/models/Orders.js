const { Schema, model} = require('mongoose') 

const orderSchema = new Schema({


    paypal_email_address : {
        type: String,
        require: true
    },
  
    paypal_account_id: {
        type: String,
        require: true
    },


    paypal_account_status: {
        type: String,
        require: true
    },
    
    name: {
        type: String
    },

    surname: {
        type: String
    },

    address: {
        type: String
    },

    address_line_1: {

    },

    address_area_2: {

    },

    address_area_1: {

    },

    postal_code: {

    },

    country_code: {

    },

    payment_status: {

    },

    payment_id: {

    },

    payment_amount_value: {

    },

    payment_amount_currency_code: {


    },

    payment_create: {

    },

    payment_update:{

    },

   





    
})

module.exports = model('order', orderSchema)