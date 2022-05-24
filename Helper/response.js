exports.empty_message   =   function(req, res, report){
    //console.log("Missing Value For " + report);
    res.end("Enter Value for " + report);
    return;
}

exports.send_failure  =   function(res, http, err){
    var code =    err.code ? err.code : err.name;
    res.writeHead(http, {contentType : "application/json"});
    res.end(JSON.stringify({error : code, status : 503, message : err.message}));
}

exports.send_success  =   function(res, http,  data){
    res.writeHead(http, {contentType : "application/json"});
    res.end(JSON.stringify({error : null, status : http, message : data}));
}
