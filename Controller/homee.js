const Home = require("./../Model/home_town.js");

module.exports.addIt    =   function(u, callback)
{
    let home =   new Home();
    home.user_id       =   u.user_id;
    home.family_name   =   u.family_name;
    home.neareast_bustop = u.neareast_bustop;
    home.land_mark     =   u.land_mark;
    home.state         =   u.state;
    //console.log(regit);
    home.save(function(err, result) 
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
    Home.find({}, function(err, result)
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
        Home.findOneAndUpdate({ "_id": u.id }, { "$set": { "family_name": u.family_name, "neareast_bustop": u.neareast_bustop, "land_mark": u.land_mark, "state": u.state }}).exec(function(err, doc){
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
        Home.findOne({_id: u.id}, function(err, result) 
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
        home.findByIdAndRemove({_id: u.id}, function(err, result) 
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



