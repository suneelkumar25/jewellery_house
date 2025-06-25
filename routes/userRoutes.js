const express = require('express');
const routes = express.Router();
const postController = require('../controller/postController');
const getController = require('../controller/getController');
const updateController = require('../controller/updateController');

// POST API'S
routes.post('/jewellery_registration_post', postController.jewellery_registration_post);
routes.post('/jewellery_categories_post',postController.jewellery_categories_post);
routes.post('/jewellery_products_post',postController.jewellery_products_post);

// GET API'S
routes.get('/jewellery_products_get', getController.jewellery_products_get)
routes.get('/jewellery_categories_get',getController.jewellery_categories_get);

// UPDATE API'S
routes.put('/jewellery_products_update', updateController.jewellery_products_update);

module.exports = routes;



