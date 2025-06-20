const express = require('express');
const routes = express.Router();
const postController = require('../controller/postController');

routes.post('/jewellery_registration_post', postController.jewellery_registration_post);

module.exports = routes;
