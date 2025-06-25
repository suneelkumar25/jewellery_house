const connection = require("../config/database");

module.exports = {
    jewellery_products_get: () => {
        return new Promise((resolve, reject) => {
            const getQuery = `select * from Jewellery_products`;

            connection.execute(getQuery, [], (getError, getResult) => {
                if (getError) {
                    return reject(`Error While getting Data.`);
                }
                resolve({ status: true, message: 'Data Get Successfully.', result: getResult })
            })
        })
    },

    jewellery_categories_get: () => {
        return new Promise((resolve, reject) => {
            const getQuery = `select * from jewellery_categories`;

            connection.execute(getQuery, [], (getError, getResult) => {
                if (getError) {
                    return reject(`Error Whilr getting Data.`);
                }
                resolve({ status: true, massage: 'Data Get Successfully.', result: getResult})
            })
        })
    }
}