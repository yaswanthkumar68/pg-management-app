import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const SECRETKEY = process.env.SECRETKEY

export const validateToken = (req, res, next) => {
    const token = req.headers["x-auth"]
    if(!token){
        return res.send("token is required")
    }
    try{
        const verifiedUser = jwt.verify(token, SECRETKEY)
        req.body.ownerId = verifiedUser.ownerId
        next()
    } catch(err){
        console.log(err)
        return res.send(err)
    }
}