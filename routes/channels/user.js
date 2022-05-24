const express = require("express");
const session = require("express-session");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const duration = 1000 * 60 * 60 * 24;
app.use(session(
    {
        name : "fantasy",
        secret : "T51oAKERKt1D470KYja35YAAxo5yOsbBOxnyNm92QU3hf",
        resave : false,
        saveUninitialized : false,
        cookie : { maxAge : duration }
    }
));

const isLoggedIn = (req, res, next) => {
    if(!req.session.userId)
    {
        next();
    } else {
        res.json({status : 403, msg : "unauthorized", redirectTo : "https://recruitment.com/login" });
    }
}

router.get('/login', function(req, res)
{
    // res.send({"User" : "All the user in the room"})
    if(sess.id)
    {
        res.json(
                    { status : 200,  msg : "User authorized", redirectTo : "https://recruitment.com/dashboard" }
                );
    } else {
        res.json(
                    { status : 403,  msg : "User not authorized", redirectTo : "https://recruitment.com/login" }
                );
    }    
});

router.post('/login', isLoggedIn, function(req, res)
{        
    let login = require("../../controller/accex.js");
    login.login(req.body, function(result, err)
    {
        if(err)
        {
            res.json(
                        { status : 500,  msg : "Internal Server error", redirectTo : "https://recruitment.com/login" }
                    );
        } 
        else if(result == null)
        {
            res.json(
                        { status : 403,  msg : result, "Invalid username or password" : "https://recruitment.com/dashboard" }
                    );
        } else {
            const userId = req.session;
            req.session.userId = result._id;
            console.log(req.session.userId);
            console.log(req.session);
            res.json(
                        { status : 200,  msg : result, redirectTo : "https://recruitment.com/dashboard" }
                    );
        }
    });
});

router.post('/logout', function(req, res)
{
     console.log(req.session.userId);
     userId = req.session;
     res.clearCookie("fantasy");
     if(req.session.userId)
     {
        req.session.destroy();
        res.json(
                    { status : 200, msg : "user successfully logged out", redirectTo : "https://recruitment.com/login" }
                );
     } else {         
        res.json(
            { status : 200, msg : "No user in session", redirectTo : "https://recruitment.com/login" }
        );
     }
});

router.post('/signup', function(req, res)
{
    var up = require("../../controller/accex.js");
    up.uzer(req.body, function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.post('/utype', function(req, res)
{
    var uztype = require("../../controller/accex.js");
    // res.json("Applicant name is " + req.body.name);
    let userType = req.body.typeName;
    uztype.utype(userType, function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.get('/utype', function(req, res)
{
    var uztype = require("../../controller/accex.js");
    uztype.all_usertype(function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});


router.post('/change/utype', function(req, res)
{
    const uztype = require("../../controller/accex.js");
    // console.log(req.body.id + ' -- ' + req.body.name);
    uztype.rename_utype(req.body, function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.get('/find_utype', function(req, res)
{
    const uztype = require("../../controller/accex.js");
    uztype.findTypeById(req.body, function(result, err)
    {
        if(err)
        {    
            res.json({ error: err });  
        } else {
            res.json({ user: result });
        }
    });
});

router.get('/delete_utype', function(req, res)
{
    const uztype = require("../../controller/accex.js");
    uztype.deleteTypeById(req.body, function(result, err)
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