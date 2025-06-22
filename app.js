const express = require('express');
const appRoute = express();
const userRoutes = require('./routes/userRoutes'); // corrected path

appRoute.use(express.json());
appRoute.use('/jewellery/api', userRoutes); // final route: /jewellery/api/jewellery_registration_post
module.exports = appRoute;
 