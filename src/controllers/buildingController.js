import {
    postBuildingService,
    getBuildingService,
    putBuildingService,
    deleteBuildingService
} from '../services/buildingServices.js'

export const postBuildingController = async(req, res, next) => {
    const buildingInfo = req.body
    try{
        const result = await postBuildingService(buildingInfo)
        return res.json(result)

    } catch(err){
        return res.json(err)
    }
}

export const getBuildingController = async(req, res, next) =>{
    const ownerId = req.body.ownerId
    try{
        const result = await getBuildingService(ownerId)
        return res.json(result)
        
    } catch(err){
        return res.json(err)
    }
}

export const putBuildingController = async(req, res, next) => {
    const buildingId = req.params.id, buildingInfo = req.body
    try{
        const result = await putBuildingService(buildingId, buildingInfo)
        return res.json(result)
    
    } catch(err){
        return res.json(err)
    }
}

export const deleteBuildingController = async(req, res, next) => {
    const buildingId = req.params.id
    try{
        const result = await deleteBuildingService(buildingId)
        return res.json(result)
    } catch(err){
        return err
    }
}