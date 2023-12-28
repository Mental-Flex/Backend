const axios = require('axios') 
const {PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET} = require('../config.js') 




    const createOrder1 = async (req, res) => {
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
    
        // const params = new URLSearchParams()
        // params.append('grant_type', 'client_credentials')

        // const {data: {access_token}} = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
        //     Authorization: {
        //         username: PAYPAL_API_CLIENT,
        //         password: PAYPAL_API_SECRET
        //     }
        // })


        

       const access_token = "A21AAKi7kgsqUnVf8ZVVGPWs6gWHDl7NR50cvoXmeK9FjWGn94nswJvV5I-892MOJzNFIpiSkZMQRjcIRjmZTqrfIJizDZjhw"

       const response =  await axios.post (`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {

                Authorization: `Bearer ${access_token}`
            
            }
        })

    

       return  res.json(response.data)

    }


    const createOrder2 = async (req, res) => {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "90.00",
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

       const access_token = "A21AAKi7kgsqUnVf8ZVVGPWs6gWHDl7NR50cvoXmeK9FjWGn94nswJvV5I-892MOJzNFIpiSkZMQRjcIRjmZTqrfIJizDZjhw"

       const response =  await axios.post (`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {

                Authorization: `Bearer ${access_token}`
                
            }
        })

    

       return  res.json(response.data)

    }

    const createOrder3 = async (req, res) => {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "80.00",
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

       const access_token = "A21AAKi7kgsqUnVf8ZVVGPWs6gWHDl7NR50cvoXmeK9FjWGn94nswJvV5I-892MOJzNFIpiSkZMQRjcIRjmZTqrfIJizDZjhw"

       const response =  await axios.post (`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {

                Authorization: `Bearer ${access_token}`
                
            }
        })

    

       return  res.json(response.data)

    }


    const createOrder4 = async (req, res) => {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "70.00",
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

       const access_token = "A21AAKi7kgsqUnVf8ZVVGPWs6gWHDl7NR50cvoXmeK9FjWGn94nswJvV5I-892MOJzNFIpiSkZMQRjcIRjmZTqrfIJizDZjhw"

       const response =  await axios.post (`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {

                Authorization: `Bearer ${access_token}`
                
            }
        })

    

       return  res.json(response.data)

    }
        
    

    

        




const captureOrder = async(req, res) => {

const {token} = req.query


const access_token = "A21AAKi7kgsqUnVf8ZVVGPWs6gWHDl7NR50cvoXmeK9FjWGn94nswJvV5I-892MOJzNFIpiSkZMQRjcIRjmZTqrfIJizDZjhw"

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

        res.redirect('http://localhost:3001/')
    
       
    
        }catch(error){
    
            res.status(400).json({error: error.message})
        }
    
    
    
    }


module.exports = {
    createOrder1,
    createOrder2,
    createOrder3,
    createOrder4,
    captureOrder,
    cancelPayment
}