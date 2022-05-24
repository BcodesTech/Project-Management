const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Refree      =   mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const refreeSchema = new Refree({ 

    user_id     :   { type : String, max : 30,  required : [true, 'User Id is required']  },
    firstname   :   { type : String, max : 20,  required : [true, 'Firstname is required'] },
    lastname    :   { type : String, max : 20,  required : [true, 'Lastname is required'] },
    othername   :   { type : String, max : 6,  required : [true, 'Other is required'], unique : true },
    office_addr :   { type : String, max : 25,  required : [true, 'Office address is required'] },
    phone       :   { type : String, max : 200,  required : [true, 'Phone number is required'] },
    occupation  :   { type: String, max : 200,  required : [true, 'Occupation is required'] },
    email       :  { type : String, max : 30,  required : [true, 'Email is required']  },
    entry       :   { type : Date, default : Date.now }
});

module.exports = mongoose.model('Refree', refreeSchema);