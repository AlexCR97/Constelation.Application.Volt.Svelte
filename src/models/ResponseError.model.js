export class ResponseError {
    details
    message
    statusCode
    type

    static fromAxiosError(error) {
        console.log('fromAxiosError:', error)
        const a = new ResponseError()

        if (error.response && error.response.data) {
            a.details = error.response.data.details
            a.message = error.response.data.message
            a.statusCode = error.response.data.statusCode
            a.type = error.response.data.type
        } else {
            a.message = error.message
        }

        return a
    }
}
