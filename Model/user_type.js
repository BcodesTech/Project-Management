const mongoose    =     require('mongoose');
mongoose.Promise  =     global.Promise;
const uType       =     mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const utypeSchema = new uType({ 

    user_id     :   { type : String, max : 30,  required : [true, 'User Id is required']  },
    name    : {  type : String, max : 25,  required : [true, 'Type name is required'] },
    entry   : {  type : Date, default : Date.now }

});

module.exports = mongoose.model('uType', utypeSchema);