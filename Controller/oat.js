const Oath = require("./../Model/irrevocable.js");

module.exports.addIt    =   function(u, callback)
{
    let Oath =   new Oath();
    Oath.user_id = u.id;
    Oath.name   =   u.name;
    //console.log(regit);
    Oath.save(function(err, result) 
    {
      if(err) 
      {
        callback(err);
      } else {
        callback(result);
      }
    });
}

module.exports.getAll = function(callback)
{
    Oath.find({}, function(err, result)
    {
        if(err)
        {
            callback(err);
        } else {
            callback(result);
        }
    });  
}

module.exports.changeIt = function(u, callback)
{
    try 
    {
        Oath.findOneAndUpdate({ _id : u.id}, { name : u.name}, function(err, result)
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

module.exports.findById = function(u, callback)
{
    try 
    {
        Oath.findOne({_id: u.id}, function(err, result) 
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

module.exports.deleteItById = function(u, callback)
{
    try 
    {
        Oath.findByIdAndRemove({_id: u.id}, function(err, result) 
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



