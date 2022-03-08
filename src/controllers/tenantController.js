import {
    postTenantService,
    deleteTenantService,
    getTenantService,
    putTenantService
} from '../services/tenantService.js'

export const postTenantController = async(req, res, next) => {
    const tenantInfo = {...req.body, ownerId : req.ownerId}
    const images = req.file

    try{
        const result = await postTenantService(tenantInfo, images)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}

export const deleteTenantController = async(req, res, next) => {
    const tenantId = req.params.id
    try{
        const result = await deleteTenantService(tenantId)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}

export const getTenantController = async(req, res, next) => {
    const {ownerId} = req.query
    try{
        const result = await getTenantService(ownerId)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}

export const putTenantController = async(req, res, next) => {
    const tenantId = req.params.id
    const tenantInfo = {...req.body, ownerId : req.ownerId}
    const images = req.file
    try{
        const result = await putTenantService(tenantId, tenantInfo, images)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}