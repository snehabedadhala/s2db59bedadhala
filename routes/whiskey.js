var express = require('express'); 
const whiskey_controlers= require('../controllers/whiskey'); 
var router = express.Router(); 
 
/* GET whiskeys */ 
router.get('/', whiskey_controlers.whiskey_view_all_Page ); 
module.exports = router; 

/* GET detail costume page */ 
router.get('/detail', whiskey_controlers.whiskey_view_one_Page); 

/* GET create costume page */ 
router.get('/create', whiskey_controlers.whiskey_create_Page); 

/* GET create update page */ 
router.get('/update', whiskey_controlers.whiskey_update_Page); 

/* GET delete costume page */ 
router.get('/delete', whiskey_controlers.whiskey_delete_Page); 