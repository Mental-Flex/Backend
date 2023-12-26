const axios = require('axios') 
const {PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET} = require('../config.js') 


const createOrder = async(req, res) => {

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
    
        // Crear parámetros para obtener el token de acceso
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
    
        try {
            // Paso 1: Obtener el token de acceso
            const { data } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
                auth: {
                    username: PAYPAL_API_CLIENT,
                    password: PAYPAL_API_SECRET,
                },
            });
    
            const access_token = data.access_token;
    
            // Paso 2: Crear la orden
            const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
    
            // Registrar la respuesta o realizar alguna acción con ella
            console.log(response.data);
    
            return res.json('Orden capturada exitosamente');
        } catch (error) {
            // Manejar errores de manera apropiada
            console.error(error.response.data);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    };
    
    module.exports = createOrder;
    

    

        

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