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


// VIEWS 
// Handle a show all view 
exports.whiskey_view_all_Page = async function(req, res) { 
    try{ 
        thewhiskeys = await whiskey.find(); 
        res.render('whiskeys', { title: 'whiskey Search Results', results: thewhiskeys}); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.whiskey_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new whiskey(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.whiskey_type = req.body.wtype; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Whiskey. 
exports.whiskey_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await whiskey.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Costume update form on PUT. 
exports.whiskey_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await whiskey.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name) toUpdate.name = req.body.name; 
        if(req.body.whiskey_type) toUpdate.whiskey_type = req.body.whiskey_type; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};

// Handle Costume delete on DELETE. 
exports.whiskey_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await whiskey.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

 // Handle a show one view with id specified by query 
 exports.whiskey_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await whiskey.findById( req.query.id) 
        res.render('whiskeydetail',  
{ title: 'Whiskey Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.whiskey_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('whiskeycreate', { title: 'whiskey Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 