const User = require('../crew/User');
const { HTTPResponse } = require('../library/library-http-response');

const saveUserDetails = async ({ first_name, last_name }) => {

    if (!first_name) {
        return HTTPResponse.send(HTTPResponse.STATUS_CODE.BadRequest, 'First name is required');
    }

    if (!last_name) {
        return HTTPResponse.send(HTTPResponse.STATUS_CODE.BadRequest, 'Last name is required');
    }

    try {

        const result = await User.insertUser(first_name, last_name);

        if(result?.affectedRows < 1){
            // return HTTPResponse.send(HTTPResponse.STATUS_CODE.DatabaseError, result?.message ?? `DB Error`); To be added
        }

        return HTTPResponse.send(HTTPResponse.STATUS_CODE.Created, result);
        
    } catch (error) {
        // return HTTPResponse.send(HTTPResponse.STATUS_CODE.InternalServerError, error); To be added
    }
}

module.exports = {
    saveUserDetails
}