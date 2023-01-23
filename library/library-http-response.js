class HTTPResponse {
    static STATUS_CODE = {
        Success: 200,
        Created: 201,
        BadRequest: 400,
        Unauthorized: 401,
        Forbidden: 403,
        NotFound: 404,
        InternalServerError: 500,
        DatabaseError: 501,
        UpstreamError: 503
    }

    static STATUS_MESSAGE = {
        Success: "Succcess",
        Created: "Created",
        BadRequest: "Bad Request",
        Unauthorized: "Unauthorized",
        Forbidden: "Forbidden",
        NotFound: "Not Found",
        InternalServerError: "Internal Server Error",
        DatabaseError: "Database Error",
        UpstreamError: "Upstream/3rd Party Error"
    }

    static send(status, message = "") {
        let formattedMessage;
        let errorType;
        let response = {};
        switch (status) {
            case this.STATUS_CODE.Success:
                errorType = this.STATUS_MESSAGE.Success;
                formattedMessage = JSON.stringify(message);
                break;
            case this.STATUS_CODE.Created:
                errorType = this.STATUS_MESSAGE.Created;
                formattedMessage = `${this.STATUS_MESSAGE.Created} : ${JSON.stringify(message)}`;
                break;
            case this.STATUS_CODE.BadRequest:
                errorType = this.STATUS_MESSAGE.BadRequest;
                formattedMessage = `${this.STATUS_MESSAGE.BadRequest} : ${JSON.stringify(message)}`;
                break;
            default:
                break;
        }
        response = {
            statusCode: status,
            isBase64Encoded: false,
            body: formattedMessage
        };

        if (status === this.STATUS_CODE.Success) return { result: response, error: null };

        return { result: null, error: response };
    }
}

module.exports = {
    HTTPResponse
}