const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Home        =   mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const homeSchema = new Home({ 

    user_id         :   { type : String, max : 30,  required : [true, 'User Id is required']  },
    family_name     :   { type : String, max : 20,  required : [true, 'Family name is required'] },
    neareast_bustop:    { type : String, max : 200,  required : [true, 'Nearest Bus/Stop is required'] },
    land_mark       :   { type : String, max : 20,  required : [true, 'Land mark is required'] },
    state           :   { type : String, max : 30,  required : [true, 'State is required'], unique : true },
    entry           :   { type : Date, default : Date.now }

});

module.exports = mongoose.model('Home', homeSchema);

