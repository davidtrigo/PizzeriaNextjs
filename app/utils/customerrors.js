class DuplicateError extends Error{
    constructor(message){
        super(message)
    }
}
class NotExistsError extends Error{
    constructor(message){
        super(message)
    }
}

module.exports={
    DuplicateError,
    NotExistsError
}