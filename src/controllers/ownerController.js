import {
    ownerRegisterService,
    ownerLoginService
} from '../services/ownerService.js'

export const ownerRegisterController = async(req, res, next) => {
    const ownerInfo = req.body
    try{
        const result = await ownerRegisterService(ownerInfo)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}

export const ownerLoginController = async(req, res, next) => {
    const ownerAuthDetails = req.body
    
    try{
        const result = await ownerLoginService(ownerAuthDetails)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}