remove_array_empty = {

    remove_empty : function(data)
    {        
        let applicantData;
        for(i = 0; i < data.length - 1; i++)
        {
            if(i < 1)
            {
                applicantData =  data;
                break;
            }
        }   
        return applicantData;      
    }

}

module.exports.remove_array_empty  =  remove_array_empty;
