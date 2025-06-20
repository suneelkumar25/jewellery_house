const connection = require('../config/database')

module.exports = {
  jewellery_registration_post: (userName, userEmail) => {
    return new Promise((resolve, reject) => {
      const insertQuery = `insert into jewellery_registration (userName, userEmail) values (?, ?)`;
      const insertValues = [userName, userEmail];
      connection.execute(insertQuery,insertValues, (insertError , insertResult) =>{
        if(insertError){
            return reject(`Error while inserting the data.`)
        }
            resolve({ status: true, message: `Inserted Data Sucessfuly`, result: insertResult });
      })
    });
  },
};
