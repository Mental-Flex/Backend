
const {getAllOrders} = require('../controllers/ordersControllers')


const getOrdersHandler = async(req, res) => {

    try{

    const orders = await getAllOrders()

    res.status(200).json(orders)

    }catch(error){

        res.status(400).json({error: error.message})
    }

}


module.exports = {
   
    getOrdersHandler,
    
}
