import multer from 'multer'


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'./images')
    },
    filename: (req, file, callback) => {
        let filename=`Image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        callback(null,true)
    } else {
        callback(null, false)
       return callback(new Error("Only jpg,jpeg,png file is allowded"))
        
    }
}


const multerConfig = multer({
    storage,
    fileFilter
})

export default multerConfig