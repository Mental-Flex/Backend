const axios = require('axios') 
const {PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET} = require('../config.js') 
const Order = require('../models/Orders.js')




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


        

       const access_token = "A21AAIsUXi2mvJ0GhFaHO3PztiJrpkESkra0BpqSfbIAemjsHHQg3zLrxR2cZL2ydwfJgQadvytKv-j3uxJBXOwFf5yR0_EMQ"

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

       const access_token = "A21AAIsUXi2mvJ0GhFaHO3PztiJrpkESkra0BpqSfbIAemjsHHQg3zLrxR2cZL2ydwfJgQadvytKv-j3uxJBXOwFf5yR0_EMQ"

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

       const access_token = "A21AAIsUXi2mvJ0GhFaHO3PztiJrpkESkra0BpqSfbIAemjsHHQg3zLrxR2cZL2ydwfJgQadvytKv-j3uxJBXOwFf5yR0_EMQ"

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

       const access_token = "A21AAIsUXi2mvJ0GhFaHO3PztiJrpkESkra0BpqSfbIAemjsHHQg3zLrxR2cZL2ydwfJgQadvytKv-j3uxJBXOwFf5yR0_EMQ"

       const response =  await axios.post (`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {

                Authorization: `Bearer ${access_token}`
                
            }
        })

    

       return  res.json(response.data)

    }
        
    

    

        




const captureOrder = async(req, res) => {

const {token} = req.query


const access_token = "A21AAIsUXi2mvJ0GhFaHO3PztiJrpkESkra0BpqSfbIAemjsHHQg3zLrxR2cZL2ydwfJgQadvytKv-j3uxJBXOwFf5yR0_EMQ"

    const response =  await axios.post (`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
        headers: {

            Authorization: `Bearer ${access_token}`
            
        }
    })




    const newOrder = new Order ({

        paypal_email_address : response.data.payment_source.paypal.email_address,
      
        paypal_account_id:  response.data.payment_source.paypal.account_id,
    
    
        paypal_account_status: response.data.payment_source.paypal.account_status,
        
        name: response.data.payment_source.paypal.name.given_name,
    
        surname: response.data.payment_source.paypal.name.surname,
    
        address_line_1: response.data.purchase_units[0].shipping.address.address_line_1,
    
        address_area_2: response.data.purchase_units[0].shipping.address.address_area_2,
    
        address_area_1: response.data.purchase_units[0].shipping.address.address_area_1,
    
        postal_code: response.data.purchase_units[0].shipping.address.postal_code,
    
        country_code: response.data.purchase_units[0].shipping.address.country_code,
    
        payment_status: response.data.purchase_units[0].payments.captures[0].status,

        payment_id: response.data.purchase_units[0].payments.captures[0].id,
    
        payment_amount_value: response.data.purchase_units[0].payments.captures[0].amount.value,
    
        payment_amount_currency_code: response.data.purchase_units[0].payments.captures[0].amount.currency_code,
    
        payment_create: response.data.purchase_units[0].payments.captures[0].create_time,
    
        payment_update: response.data.purchase_units[0].payments.captures[0].update_time,
    
       
    
    })


await newOrder.save()


    
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