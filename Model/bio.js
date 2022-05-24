const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Bio         =   mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const bioSchema = new Bio({ 

    user_id     :   { type : String, max : 30,  required : [true, 'User Id is required']  },
    firstname   :   { type : String, max : 20,  required : [true, 'Firstname is required'] },
    lastname    :   { type : String, max : 20,  required : [true, 'Lastname is required'] },
    gender      :   { type : String, max : 6,  required : [true, 'Gender is required'], unique : true },
    phone_no    :   { type : String, max : 25,  required : [true, 'Phone Number is required'] },
    residential :   { type : String, max : 200,  required : [true, 'Residential Address is required'] },
    neareast_bustop:{ type : String, max : 200,  required : [true, 'Nearest Bus/Stop is required'] },
    state       :   { type : String, max : 30,  required : [true, 'State is required']  },
    bvn         :   { type : String, max : 15,  required : [true, 'BVN is required'] },
    dob         :   { type : Date, required : [true, 'Date is required']  },
    marital_status: { type : String, max : 15,  required : [true, 'Marital Status is required']  },
    nin         :   { type : String, max : 15,  required : [true, 'NIN is required']  },
    email       :   { type : String, max : 15,  required : [true, 'Email is required'], unique : true  },
    passport    :   { type : String, max : 30, lowercase  : true,  required : [true, 'Passport is required'] },
    signature   :   { type : String, max : 30, lowercase  : true,  required : [true, 'Signature is required'] },
    entry       :   { type : Date, default : Date.now }

});

module.exports = mongoose.model('Bio', bioSchema);