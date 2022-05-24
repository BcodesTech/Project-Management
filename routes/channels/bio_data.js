const express = require("express");
const session = require("express-session");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const router = express.Router();

const app = express();

app.use(bodyParser.json());


router.post('/bio_data', function(req, res)
{
    var bio = require("../../controller/biodata.js");
    bio.bio_data(req.body, function(result, err)
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