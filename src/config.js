
 
 const dotenv = require('dotenv');
 dotenv.config();


 
 const PAYPAL_API_CLIENT =process.env.PAYPAL_API_CLIENTs
 const PAYPAL_API_SECRET =process.env.PAYPAL_API_SECRETs
PAYPAL_API = 'https://api-m.sandbox.paypal.com';


module.exports = {
    PAYPAL_API,
    PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET
}