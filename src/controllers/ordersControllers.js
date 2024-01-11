const Orders = require('../models/Orders')


const getAllOrders = async () => {
    const allOrders= await Orders.find().sort({ payment_create: -1 });
    return allOrders
}




module.exports = {
    
    getAllOrders,
    
}
