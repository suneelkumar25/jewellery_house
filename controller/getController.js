const getOperations = require('../operations/getOperations');

module.exports = {
    jewellery_products_get: async (req, res) => {
        try {
            const productResult = await getOperations.jewellery_products_get();
            return res.status(200).json({ status: true, message: `Data get successfully.`, result: productResult });
        } catch (error) {
            console.log(error, "error");
            return res.status(500).json({status: false,message: `Internal Server Error. ${error}` })
        }
    },

    jewellery_categories_get: async (req,res) => {
        try {
            const categoryResult = await getOperations.jewellery_categories_get();
            return res.status(200).json({ status: true, massage: `Data get successfully.`, result: categoryResult});
        } catch (error) {
            return res.status(500).json({status: false, massage: `Internal Server Error. ${error}`})
            
        }
    }
}