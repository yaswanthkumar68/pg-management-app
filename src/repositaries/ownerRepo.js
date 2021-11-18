import Owner from "../models/owner.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const SECRETKEY = process.env.SECRETKEY

export const ownerRegisterRepo = async(ownerInfo) => {
    
    try{
        const isOwnerExisted = await Owner.findOne({email : ownerInfo.email})
        
        if(!isOwnerExisted){
            const postData = new Owner(ownerInfo)
            const hashedPassword = await bcrypt.hash(ownerInfo.password, 10)
            postData.password = hashedPassword
            const result = await postData.save()
            return result

        } else{
            return "owner details already existed"
        }
    } catch(err){
        return err
    }

}

export const ownerLoginRepo = async(ownerAuthDetails) => {
    try{
        const getOwner = await Owner.findOne({email : ownerAuthDetails.email})
        if(getOwner && await bcrypt.compare(ownerAuthDetails.password, getOwner.password)){
            const token = jwt.sign(
                {ownerId : getOwner._id, email : getOwner.email}, SECRETKEY, {expiresIn : '1h'}
            )
            return token
        } else{
            return "wrong credintials"
        }
    } catch(err){
        return  err
    }


}