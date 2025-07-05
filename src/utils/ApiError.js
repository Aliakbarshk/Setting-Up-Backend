class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        statck = ""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = error
        
        if(stack){
            this.stack = statck
        } else{
            Error.captureStackTrace(this, this.constructor)
        }



    }
}


export{ApiError}
// Does not understood this properly have to be revised