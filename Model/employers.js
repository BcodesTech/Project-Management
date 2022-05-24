const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Employer    =   mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const employerSchema = new Employer({ 

    user_id     :   { type : String, max : 30,  required : [true, 'User Id is required']  },
    firstname   :   { type : String, max : 20,  required : [true, 'Firstname is required'] },
    lastname    :   { type : String, max : 20,  required : [true, 'Lastname is required'] },
    cmp_name    :   { type : String, max : 25,  required : [true, 'Company name is required'] },
    cmp_address :   { type : String, max : 6,  required : [true, 'Company address is required'] },
    cmp_email   :   { type : String, max : 25,  required : [true, 'Company email is required'] },
    start_date  :   { type : String, max : 200,  required : [true, 'Start or end date is required'] },
    post_held   :   { type : String, max : 30,  required : [true, 'Position is required']  },
    reason      :   { type : String, max : 15,  required : [true, 'Reason is required'] },
    outstanding_loan         :   { type : Date, required : [true, 'Outstanding is required']  },
    payment_method: { type : String, max : 15,  required : [true, 'Payment is required']  },
    entry       :   { type : Date, default : Date.now }

});

module.exports = mongoose.model('Employer', employerSchema);
