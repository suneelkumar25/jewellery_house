const postOperations = require('../operations/postOperations');

module.exports = {
    jewellery_registration_post: async(req, res) =>{
      try { 
          const {userName, userEmail} = req.body;
        const requiredFields = ['userName', 'userEmail'];
        for(const fields of requiredFields) {
            if(!req.body[fields]) {
                return res.status(400).json({status:false, massage: `${fields.replace('_',  ' ')} is required.`})
            }
        }
        const result = await postOperations.jewellery_registration_post(userName, userEmail);
        return res.status(200).json({status: true, message: `Registered Successfully.`});
      } catch (error) {
        return res.status(500).json({ status: false, message: `internal server error. ${error}`});
      }
    },
}