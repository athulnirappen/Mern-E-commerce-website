import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ConnectDb from './Db/connection.js'
import authRouter from './Routes/auth.js'
import productRouter from './Routes/product.js'
import userRouter from './Routes/user.js'



dotenv.config()
ConnectDb()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/product', productRouter)
app.use('/api/user', userRouter)

app.use('/images', express.static("./images"))



//response handler middleware

app.use((obj, req, res, next) => {
    const statusCode = obj.status || 500
    const errorMessage = obj.message || "Something Went wrong"
    return res.status(statusCode).json({
        success: [200, 201, 202].some((a) => a === obj.status) ? true : false,
        status: statusCode,
        message: errorMessage,
        data:obj.data || obj.error
    })
})




const PORT=8000 || process.env.PORT

app.listen(PORT,() => {
    console.log(`Server Running in the port:${PORT}`);
    
})
