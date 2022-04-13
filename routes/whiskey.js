var express = require('express'); 
const whiskey_controlers= require('../controllers/whiskey'); 
var router = express.Router(); 
 
/* GET whiskeys */ 
router.get('/', whiskey_controlers.whiskey_view_all_Page ); 
module.exports = router; 