const Refree = require("./../Model/refree.js");

module.exports.addIt    =   function(u, callback)
{
    let refree =   new Refree();
    refree.user_id      =   u.user_id;
    refree.firstname    =   u.firstname;
    refree.lastname     =   u.lastname;
    refree.othername    =   u.othername;
    refree.office_addr  =   u.office_addr;
    refree.phone        =   u.phone;
    refree.occupation   =   u.occupation;
    refree.email        =   u.email;
    //console.log(regit);
    refree.save(function(err, result) 
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
    Refree.find({}, function(err, result)
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
        Refree.findOneAndUpdate({ "_id": u.id }, { "$set": { "firstname": u.firstname, "lastname": u.lastname, "othername": u.othername, "office_addr": u.office_addr, "phone": u.phone, "occupation": u.occupation, "email": u.email, }}).exec(function(err, doc){
            if(err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(doc);
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
        Refree.findOne({_id: u.id}, function(err, result) 
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
        Refree.findByIdAndRemove({_id: u.id}, function(err, result) 
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



