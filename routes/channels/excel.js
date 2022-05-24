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
    let sendData = require("../../controller/upload_excel.js");
    sendData.allEmail(function(result, err)
    {
        if(err)
        {
            res.json({ status : 500,  msg : err });
        } else {  
            let emailFromDb = [];
            for(i = 0; i < result.length; i++)
            {
                emailFromDb.push(result[i].email);
            }
            let emailToSendToDb = [];
            let filteredData;
            let pos = [];
            for(i = 0; i < bulkData.length; i++)
            {
                if(!emailFromDb.includes(bulkData[i].email))
                {
                    // emailToSendToDb.push([bulkData[i].email, bulkData[i].firstname])
                    pos.push(i);
                    // console.log(filteredData);
                }
            } 
            // for(j = 0; j < bulkData.length; j++)
            // {
            //     if(j == pos[j])
            //     {
            //         console.log(bulkData[j].firstname);
            //         bulkData.splice(pos[j],1);
            //         continue;
            //     }
            //     console.log(bulkData[j].firstname);
            // }

            // bulkData.slice(pos);
            pos = [1];
            let xen = [
                {
                    "firstname": "Michael",
                    "surname": "Brain",
                    "email": "michael@yahoo.com"
                  },
                  {
                    "firstname": "John",
                    "surname": "David",
                    "email": "johndavid@gmail.com"
                  },
                  {
                    "firstname": "Peter",
                    "surname": "Nelson",
                    "email": "peternelson@gmail.com"
                  }
            ]
            let theMail = ['johndavid@gmail.com', 'michael@yahoo.com'];
            let remove;
            for(i=0; i < xen.length; i++)
            {
                if(xen[i].email == 'michael@yahoo.com')
                {
                    // console.log(xen);
                    remove = xen.splice(i,1);
                }
            } 
            console.log(xen);
            res.json(xen);
            //prepare data to save to db             
            // sendData.saveUpload(bulkData, function(err, result)
            // {
            //     if(err)
            //     {
            //         res.json(err);
            //     } else {
            //         res.json(result);
            //     }
            // });
            
        }

    });


    

});

module.exports = router;