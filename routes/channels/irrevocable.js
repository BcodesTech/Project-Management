const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json());

router.post('/irrevocable', function(req, res)
{    
    let irrek = require("../../controller/irrevok.js");
    irrek.addIt(req.body, function(result, err)
    {
        if(err)
        {
            res.json( { status : 500,  msg : "Internal Server error" });
        } 
        else if(result == null)
        {
            res.json( { status : 403,  msg : "Oops, something went wrong"  });
        } else {
            res.json( { status : 200,  msg : result });
        }
    });
});

router.get('/irrevocable', function(req, res)
{
    let irrek = require("../../controller/irrevok.js");
    irrek.getAll(function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.post('/change/irrevocable', function(req, res)
{
    let irrek = require("../../controller/irrevok.js");
    irrek.changeIt(req.body, function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.post('/find_irrevocable', function(req, res)
{
    let irrek = require("../../controller/irrevok.js");
    irrek.findById(req.body, function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

module.exports = router;