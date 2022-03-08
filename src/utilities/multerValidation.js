import multer from  'multer'

const storage = multer.diskStorage({
    destination : 'public',
    filename : (req, file, cb) => {
        cb(null, req.ownerId + '_' + file.originalname)
    }
})


export const upload = multer({
    storage : storage
})