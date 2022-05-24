const Edu = require("./../Model/education.js");

module.exports.addIt    =   function(u, callback)
{
    let edu =   new Edu();
    edu.user_id = u.user_id;
    edu.institution   =   u.institution;
    edu.year   =   u.year;
    edu.grade  =   u.grade;
    //console.log(regit);
    edu.save(function(err, result) 
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
    Edu.find({}, function(err, result)
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
        Edu.findOneAndUpdate({ "_id": u.id }, { "$set": { "institution": u.institution, "year": u.year, "grade": u.grade }}).exec(function(err, doc){
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
        Edu.findOne({_id: u.id}, function(err, result) 
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
        Edu.findByIdAndRemove({_id: u.id}, function(err, result) 
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



