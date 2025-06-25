const updateOperations = require('../operations/updateOperations');


module.exports = {
    jewellery_products_update: async (req, res) => {
        try {
            const { name, sku_code, price, material, purity } = req.body;
            const requiredFields = ['name', 'sku_code', 'price', 'material', 'purity'];
            for (const fields of requiredFields) {
                if (!req.body[fields]) {
                    return res.status(404).json({ status: false, message: `${fields.replace('_', ' ')} is required.` });
                }
                const productResult = await updateOperations.jewellery_products_update(name, sku_code, price, material, purity);
                return res.status(200).json({ status: true, message: `Updated Successfully.`, result: productResult });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: `internal server Error. ${error}` });
        }
    }
}