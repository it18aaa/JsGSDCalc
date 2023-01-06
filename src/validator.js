function validateId(id) {
    let status = false;
    let data = null;
    let error = "";
    let parsedId = parseInt(id, 10);

    if (parsedId == null) {
        error = "Id cannot be null";
    }

    if (isNaN(parsedId)) {
        error = "Not a number";
    }
  
    if (parsedId > 0) {
        data = parsedId;
        status = true;
    }

    return {
        status: status,
        data: data,
        error: error,
    };
}

function validateName(input) {
    const output = {
        status: false,
        data: null,
        error: "",
    };

    // do something with input

    if (input.length > 20) {
        output.error = "Too large, limit to 20 characters";
        return output;
    } else if (typeof input !== "string") {
        output.error = "Should be string";
        return output;
    }

    output.data = input;
    output.status = true;
    output.error = "No error";
    return output;
}

export { validateId, validateName };
