export const createSuccess = (statusCode, statusMessage,data) => {
    
    const successObj = {
        status: statusCode,
        message: statusMessage,
        data,
       
    }


    return successObj
    
}