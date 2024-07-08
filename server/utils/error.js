export const createError = (status, message,error) => {
    
    const err = new Error()
    err.status = status
    err.message = message
    err.error=error
    return err
    
    
}