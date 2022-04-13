var whiskey = require('../models/whiskey'); 
 
// List of all Costumes 
exports.whiskey_list = async function(req, res) { 
    try{ 
        thewhiskeys = await whiskey.find(); 
        res.send(thewhiskeys); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.whiskey_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: whiskey detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.whiskey_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: whiskey create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.whiskey_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: whiskey delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.whiskey_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: whiskey update PUT' + req.params.id); 
}; 