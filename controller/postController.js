const postOperations = require('../operations/postOperations');

module.exports = {
  jewellery_registration_post: async (req, res) => {
    try {
      const { userName, userCode, userEmail, password } = req.body;
      const requiredFields = ['userName', 'userCode', 'userEmail', 'password'];
      for (const fields of requiredFields) {
        if (!req.body[fields]) {
          return res.status(400).json({ status: false, massage: `${fields.replace('_', ' ')} is required.` })
        }
      }
      const result = await postOperations.jewellery_registration_post(userName, userCode, userEmail, password);
      return res.status(200).json({ status: true, message: `Registered Successfully.` });
    } catch (error) {
      return res.status(500).json({ status: false, message: `internal server error. ${error}` });
    }
  },
  jewellery_categories_post: async (req, res) => {
    try {
      const { name, description } = req.body;
      const requiredFields = ['name', 'description'];
      for (fields of requiredFields) {
        if (!req.body[fields]) {
          return res.status(404).json({ status: false, message: `${fields.replace('_', ' ')} is required.` })
        }
      }
      const categoryResult = await postOperations.jewellery_categories_post(name, description);
      console.log(categoryResult, "categoryResult");
      return res.status(200).json({ status: true, message: 'Category Registered Successfully.', result: categoryResult })
    } catch (InternalError) {
      return res.status(500).json({ status: false, message: `Internal Server Error. ${InternalError}` })
    }

  },
  
}