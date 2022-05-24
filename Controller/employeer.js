const Employer = require("./../Model/Employer.js");

module.exports.addIt    =   function(u, callback)
{
    let employer =   new Employer();
    employer.user_id      =   u.user_id;
    employer.firstname    =   u.firstname;
    employer.lastname     =   u.lastname;
    employer.cmp_name     =   u.cmp_name;
    employer.cmp_address  =   u.cmp_address;
    employer.cmp_email    =   u.cmp_email;
    employer.start_date   =   u.start_date;
    employer.post_held    =   u.post_held;
    employer.reason       =   u.reason;
    employer.outstanding_loan=   u.outstanding_loan;
    employer.payment_method=   u.payment_method;
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
    Employer.find({}, function(err, result)
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
    employer.lastname     =   u.lastname;
        let query =  { "firstname": u.firstname,"lastname": u.lastname,"cmp_name": u.cmp_name,"cmp_address": u.cmp_address,"cmp_email": u.cmp_email, "start_date": u.start_date,"post_held": u.post_held,"reason": u.reason,"outstanding_loan": u.outstanding_loan,"payment_method": u.payment_method };
        Employer.findOneAndUpdate({ "_id": u.id }, { "$set": { query }}).exec(function(err, doc){
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
        Employer.findOne({_id: u.id}, function(err, result) 
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
        Employer.findByIdAndRemove({_id: u.id}, function(err, result) 
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



