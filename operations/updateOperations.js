const connection = require('../config/database');

module.exports = {
    jewellery_registration_update: (name, sku_code, price, material, purity) => {
        return new Promise((resolve, reject) => {
            const updateQuery = `update jewellery_registration set 
            name = ?, sku_code = ?, price = ?, meterial = ?, purity = ? where product_id = ?`;

            const updateValues = [name, sku_code, price, material, purity];
            connection.execute(updateQuery, updateValues, (updateErr, updateResult)=>{
                if(updateErr){
                    return reject({status: false, message: `error while updating data.${updateErr}`});
                }
                resolve({status: true, message: `Jewellery Data Updated Successfully.`, result: updateResult});
            })
        })
    }
}