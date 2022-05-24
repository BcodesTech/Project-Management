const bio = require("./../Model/bio.js");

module.exports.bio_data    =   function(u, callback)
{
    let bio_data =   new bio();
    bio_data.user_id        =   u.id
    bio_data.firstname      =   u.firstname;
    bio_data.lastname       =   u.lastname;
    bio_data.gender         =   u.gender;
    bio_data.phone_no       =   u.phone_no;
    bio_data.residential    =   u.residential;
    bio_data.neareast_bustop=   u.neareast_bustop;
    bio_data.state          =   u.state;
    bio_data.bvn            =   u.bvn;
    bio_data.dob            =   u.dob;
    bio_data.marital_status =   u.marital_status;
    bio_data.nin            =   u.nin;
    bio_data.email          =   u.email;
    bio_data.signature      =   u.signature;
    bio_data.passport       =   u.passport
    //console.log(regit);
    bio_data.save(function(err, result) 
    {
      if(err) 
      {
        callback(err);
      } else {
        callback(result);
      }
    });
}


module.exports.login = function(u, callback)
{
    user.findOne({ email : u.email, password : u.password }, function(result, err){
        if(err)
        {
            callback(err);
        } else {
            callback(result);
        }
    });  
}

module.exports.utype = function(u, callback)
{
    let ut =   new uType();
    ut.name   =   u;
    ut.save(function(err, result) 
    {
      if(err) 
      {
        callback(err);
      } else {
        callback(result);
      }
    });  
}

module.exports.all_usertype = function(callback)
{
    try 
    {
        uType.find({}, function(err, result) 
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

module.exports.rename_utype = function(u, callback)
{
    try 
    {
        uType.findOneAndUpdate({ _id : u.id}, { name : u.name}, function(err, result)
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

module.exports.findTypeById = function(u, callback)
{
    try 
    {
        uType.findOne({_id: u.id}, function(err, result) 
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


