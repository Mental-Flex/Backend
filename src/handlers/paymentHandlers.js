const axios = require('axios') 
const {PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET} = require('../config.js') 




    const createOrder = async (req, res) => {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "100.00",
                    },
                },
            ],
            application_context: {
                brand_name: "Mental Flex",
                landing_page: "NO_PREFERENCE",
                user_action: "PAY_NOW",
                return_url: 'http://localhost:3000/payment/captureOrder',
                cancel_url: 'http://localhost:3000/payment/cancelOrder',
            },
        };
    
        const params = new URLSearchParams()
        params.append('grant_type', 'client_credentials')

       const access_token = "A21AAIX_0HpsgihxlytkdjbaNqCczjwvdPPqv0M9buqjh6VVA56f3chM9MTTbY6eJU3GTvmtazOmbzABJLX_vJeEgF9IwhkSQ"

       const response =  await axios.post (`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {

                Authorization: `Bearer ${access_token}`
                
            }
        })

    

       return  res.json(response.data)

    }
        
    

    

        




const captureOrder = async(req, res) => {

const {token} = req.query


const access_token = "A21AAIX_0HpsgihxlytkdjbaNqCczjwvdPPqv0M9buqjh6VVA56f3chM9MTTbY6eJU3GTvmtazOmbzABJLX_vJeEgF9IwhkSQ"

    const response =  await axios.post (`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
        headers: {

            Authorization: `Bearer ${access_token}`
            
        }
    })

   console.log(response.data)

return  res.send("payed")

    


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