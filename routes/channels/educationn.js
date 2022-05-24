const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json());

router.post('/', function(req, res)
{    
    let education = require("../../controller/education.js");
    education.addIt(req.body, function(result, err)
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

router.get('/', function(req, res)
{
    let education = require("../../controller/education.js");
    education.getAll(function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.post('/change/', function(req, res)
{
    let education = require("../../controller/education.js");
    education.changeIt(req.body, function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.post('/find', function(req, res)
{
    let education = require("../../controller/education.js");
    education.findById(req.body, function(result, err)
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