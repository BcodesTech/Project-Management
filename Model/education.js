const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Education   =   mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const educationSchema = new Education({ 

    user_id     :   { type : String, max : 30,  required : [true, 'User Id is required']  },
    institution :   { type : String, max : 20,  required : [true, 'Institution is required'] },
    year        :   { type : String, max : 20,  required : [true, 'Year is required'] },
    grade       :   { type : String, max : 25,  required : [true, 'Grade is required'] },
    entry       :   { type : Date, default : Date.now }

});

module.exports = mongoose.model('Education', educationSchema);

