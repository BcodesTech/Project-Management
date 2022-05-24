const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Result      =   mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/openmind');

const resultSchema = new Result({ 

    user_id     :   { type : String, max : 30,  required : [true, 'User Id is required']  },
    fslc        :   { type : String, max : 20,  required : [true, 'First School Leaving Certificate is required'] },
    wassce      :   { type : String, max : 20,  required : [true, 'WASSCE is required'] },
    neco        :   { type : String, max : 25,  required : [true, 'NECO is required'] },
    bsc         :   { type : String, max : 6,   required : [true, 'BSC is required'] },
    hnd         :   { type : String, max : 25,  required : [true, 'HND is required'] },
    nysc        :   { type : String, max : 200, required : [true, 'NYSC is required'] },
    ond_nce     :   { type : String, max : 30,  required : [true, 'OND/NCE is required']  },
    professional:   { type : String, max : 15,  required : [true, 'Professional Certificate is required'] },
    msc         :   { type : String, max : 15,  required : [true, 'MSC is required'] },
    phd         :   { type : String, max : 15,  required : [true, 'PHD is required']  },
    entry       :   { type : Date, default : Date.now }

});

module.exports = mongoose.model('Result', resultSchema);

