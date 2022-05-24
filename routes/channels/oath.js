const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json());

router.post('/oath', function(req, res)
{    
    let oath = require("../../controller/oat.js");
    oath.addIt(req.body, function(result, err)
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

router.get('/oath', function(req, res)
{
    let oath = require("../../controller/oat.js");
    oath.getAll(function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.post('/change/oath', function(req, res)
{
    let oath = require("../../controller/oat.js");
    oath.changeIt(req.body, function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.post('/find_oath', function(req, res)
{
    let oath = require("../../controller/oat.js");
    oath.findById(req.body, function(result, err)
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