const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Guarantor   =   mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const guarantorSchema = new Guarantor({ 

    user_id     :   { type : String, max : 30,  required : [true, 'User Id is required']  },
    page        :   { type : String, max : 10,  required : [true, 'Guarantor form page is required']  },
    firstname   :   { type : String, max : 20,  required : [true, 'Firstname is required'] },
    lastname    :   { type : String, max : 20,  required : [true, 'Lastname is required'] },
    othername   :   { type : String, max : 6,  required : [true, 'Gender is required'], unique : true },
    occupation  :   { type : String, max : 25,  required : [true, 'Phone Number is required'] },
    position    :   { type : String, max : 200,  required : [true, 'Residential Address is required'] },
    level:      { type: String, max : 200,  required : [true, 'Residential Address is required'] },
    business_name:  { type : String, max : 30,  required : [true, 'State is required']  },
    cac         :   { type : String, max : 15,  required : [true, 'Nin is required'] },
    passport    :   { type : String, max : 15, required : [true, 'Date is required']  },

    telephone   :   { type : String, max : 15,  required : [true, 'Telephone is required'] },
    email       :   { type : String, max : 15,  required : [true, 'Office Email is required'] },
    address     :   { type : String, max : 15,  required : [true, 'Office Address is required'] },
    mobile      :   { type : String, max : 15,  required : [true, 'Office Mobile is required'] },
    relationship:   { type : String, max : 15,  required : [true, 'Relationship is required'] },

    firstname   :   { type : String, max : 15,  required : [true, 'Firstname declaration is required'] },
    lastname    :   { type : String, max : 15,  required : [true, 'Lastname declaration is required'] },
    nationality :   { type : String, max : 15,  required : [true, 'Nationality declaration is required'] },
    email       :   { type : String, max : 15,  required : [true, 'Email declaration is required'] },
    address     :   { type : String, max : 15,  required : [true, 'Address declaration is required'] },

    candidate_fn:   { type : String, max : 15,  required : [true, 'Candiddate firstname is required'] },
    candidate_ln:   { type : String, max : 15,  required : [true, 'Candidate lastname is required'] },

    signature   :   { type : String, max : 15,  required : [true, 'Guarantor signature is required'] },
    entry       :   { type : Date, default : Date.now }
});

module.exports = mongoose.model('Guarantor', guarantorSchema);
