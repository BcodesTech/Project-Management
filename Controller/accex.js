const user = require("./../Model/user.js");
const uType = require("./../Model/user_type.js");

module.exports.uzer    =   function(u, callback)
{
    let newUser =   new user();
    newUser.firstname   =   u.firstname;
    newUser.surname     =   u.surname;
    newUser.email       =   u.email;
    newUser.password    =   u.password;
    //console.log(regit);
    newUser.save(function(err, result) 
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

module.exports.deleteTypeById = function(u, callback)
{
    try 
    {
        uType.findByIdAndRemove({_id: u.id}, function(err, result) 
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


