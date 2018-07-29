var express = require('express');
var router = express.Router();

// Link Controllers

var example_controller = require('../controllers/exampleController');
var other_controller = require('../controllers/otherController')


/// EXAMPLE ROUTES ///

// GET home page
router.get('/', example_controller.index);

// GET reuest for creating example item.
router.get('/example/create', example_controller.example_create_get);

// POST request for creating example item.
router.post('/example/create', example_controller.example_create_post);

// GET request for deleting example item.
router.get('/example/:id/delete', example_controller.example_delete_get);

// POST request for deleting example item.
router.get('/example/:id/delete', example_controller.example_delete_post);

// GET request for updating example item.
router.get('/example/:id/update', example_controller.example_update_get);

// POST request for updating example item.
router.get('/example/:id/update', example_controller.example_update_post);


/// OTHER EXAMPLE ROUTES ///

// GET request for creating Other items. NOTE This must come before route for id (i.e. display other item).
router.get('/other/create', other_controller.other_create_get);

// POST request for creating Other item.
router.post('/other/create', other_controller.other_create_post);

// GET request to delete Other item.
router.get('/other/:id/delete', other_controller.other_delete_get);

// POST request to delete Other item.
router.post('/other/:id/delete', other_controller.other_delete_post);

// GET request to update Other item.
router.get('/other/:id/update', other_controller.other_update_get);

// POST request to update Other item.
router.post('/other/:id/update', other_controller.other_update_post);

// GET request for one Other item.
router.get('/other/:id', other_controller.other_detail);

// GET request for list of all Other items.
router.get('/other', other_controller.other_list);

module.exports = router;