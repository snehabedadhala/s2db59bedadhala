var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var whiskey_controller = require('../controllers/whiskey'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/whiskeys', whiskey_controller.whiskey_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/whiskeys/:id', whiskey_controller.whiskey_delete); 
 
// PUT request to update Costume. 
router.put('/whiskeys/:id', whiskey_controller.whiskey_update_put); 
 
// GET request for one Costume. 
router.get('/whiskeys/:id', whiskey_controller.whiskey_detail); 
 
// GET request for list of all Costume items. 
router.get('/whiskeys', whiskey_controller.whiskey_list); 
 
module.exports = router; 