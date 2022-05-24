const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const User        =   mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const randomString = require("../Helper/randomstring.js");

const userSchema = new User({ 

    firstname : { 
                    type : String, max : 15, lowercase  : true, trim  : true, required : [true, 'Firstname is required'] 
                },
    surname   : { 
                    type : String, max : 15, lowercase  : true, trim  : true, required : [true, 'Surname is required'] 
                },
    email     : { 
                    type : String, max : 30, lowercase  : true, trim  : true, required : [true, 'Email is required'],
                     unique : true
                },
    password : { 
                    type : String, max : 15, lowercase  : true, trim  : true, required : [true, 'Password is required'] 
                },
    category :  { type : String },
    api_token : { 
                    type : String, default : randomString.randomCharacter.generateRandomString(45)
                },
    entry     : { type : Date, default : Date.now }

});

module.exports = mongoose.model('User', userSchema);