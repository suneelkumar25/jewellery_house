const connection = require('../config/database')
const bcrypt = require('bcrypt');
const saltRounds = 10



module.exports = {
  jewellery_registration_post: (userName, userCode, userEmail, password) => {
    return new Promise((resolve, reject) => {
      const checkQuery = `select * from jewellery_registration where userEmail = ?`;
      connection.execute(checkQuery, [userEmail], (checkErr, checkResult)=>{
        if(checkErr){
          return reject(`already exists.`)
        }
        if(checkResult.length > 0){
          return reject( `Duplicate Entry not Allowed.`)
        }
      })
      bcrypt.hash(password, saltRounds, (err, hashPasswordResult) => {
        if (err) {
          return reject(`Password not hashed.`)
        }

        const insertQuery = `insert into jewellery_registration (userName, userCode, userEmail, password) values (?, ?, ?, ?)`;
        const insertValues = [userName, userCode, userEmail, hashPasswordResult];
        connection.execute(insertQuery, insertValues, (insertError, insertResult) => {
          if (insertError) {
            console.log(insertError, "insertError");
            return reject(`Error while inserting the data.`)
          }
          resolve({ status: true, message: `Inserted Data Sucessfuly`, result: insertResult });
        })
      });
    })
  },
  jewellery_categories_post: (name, description) =>{
    return new Promise((resolve, reject) => {
      const insertQuery =`insert into jewellery_categories (name, description) values (?, ?)`;
      const insertValues = [name, description];
      connection.execute(insertQuery, insertValues, (insertError, insertResult) => {
        if (insertError) {
          console.log(insertError, "insertError");
          return reject(`Error while inserting the data.`)
        }
        resolve({ status: true, message: `inserted Data Sucessfuly`, result: insertResult});
      })
    })
  }
};
