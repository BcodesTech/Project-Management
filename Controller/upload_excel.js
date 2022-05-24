const user = require("./../Model/user.js");
const excelData = require('../Helper/remove_empty_array.js');

module.exports.saveUpload    =   function(applicant, callback)
{
    try 
    {
        user.collection.insertMany(applicant, function (err, docs) 
        {
            if (err)
            {  console.log(err);
                callback(err);
            } else {
                console.log(docs);
                callback(docs);
            }
        });
    } catch (error) {
        callback(error);
    }

}

module.exports.allEmail    =   function(callback)
{
    try 
    {
        user.find({}, { email: 1 }, function(err, result) 
        {
            if(err) 
            {   
                callback(err);
            } else {                
                callback(result);
            }
        });
    } catch (error) {
        callback(error);
    }

}





