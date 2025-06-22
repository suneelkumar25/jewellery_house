const express = require('express');
const routes = express.Router();
const postController = require('../controller/postController');

routes.post('/jewellery_registration_post', postController.jewellery_registration_post);
routes.post('/jewellery_categories_post',postController.jewellery_categories_post);

module.exports = routes;
