const express = require("express");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const router = express.Router();

const app = express();
app.use(fileUpload());
app.use(bodyParser.json());

router.post('/uploadexceldata', function(req, res)
{        
    let bulkData, firstname, surname, email, password, credential;
    bulkData = req.body;
    
    req.body.forEach(function (data) 
    {
        saveData(data);
        // firstname = data.Firstname;
        // surname = data.Surname;
        // email = data.Email;
        // res.json("Credential = " + firstname + ' ' + surname + ' '  + email);
    });

    function saveData(data)
    {

    }
});

module.exports = router;