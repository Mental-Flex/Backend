const axios = require('axios') 
const {PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET} = require('../config.js') 


const createOrder = async(req, res) => {

    try{

        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount:{
                        currency_code: "USD",
                        value: "100.00"
                    }
                },
            ],

            application_context: {
                brand_name: "Mental Flex",
                landing_page: "NO_PREFERENCE",
                user_action: "PAY_NOW",
                return_url: 'http://localhost:3000/payment/captureOrder',
                cancel_url: 'http://localhost:3000/payment/cancelOrder'
            }
        }

        const params = new URLSearchParams()
        params.append('grant_type', 'client_credentials')

       const {data: {access_token}} = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
            auth: {
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET
            }
        })

       const response =  await axios.post (`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {

                Authorization: `Bearer ${access_token}`
                
            }
        })

    

    

    }catch(error){

        res.status(400).json({error: error.message})
    }

}


const captureOrder = async(req, res) => {



try{

   

    }catch(error){

        res.status(400).json({error: error.message})
    }



}


const cancelPayment = async(req, res) => {



    try{
    
       
    
        }catch(error){
    
            res.status(400).json({error: error.message})
        }
    
    
    
    }


module.exports = {
    createOrder,
    captureOrder,
    cancelPayment
}