 function validateId(id) {
    let status = false;
    let data = null;
    let error = "";
    let parsedId = parseInt(id, 10);    
    
    if(parsedId == null) {
        error = "Id cannot be null";
    }

    if(isNaN(parsedId))
    {                
        error = "Not a number";
    }

    if(parsedId > 0) {
        data = parsedId;
        status = true;
    }

    return {
        status: status,
        data: data,
        error: error,
    };
}

export { validateId };