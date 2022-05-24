const mongoose    =     require('mongoose');
mongoose.Promise  =     global.Promise;
const Irrevocable =     mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const irrSchema = new Irrevocable({ 

    user_id     :   { type : String, max : 30,  required : [true, 'User Id is required']  },
    name    : {  type : String, max : 25,  required : [true, 'Upload your oath of confidentiality'] },
    entry   : {  type : Date, default : Date.now }

});

module.exports = mongoose.model('Irrevocable', irrSchema);