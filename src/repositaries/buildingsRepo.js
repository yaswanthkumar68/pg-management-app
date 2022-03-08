import Building from "../models/building.js";

export const postBuildingRepo = async(buildingInfo) => {
    
    try{
        const isBuildingExist = await Building.findOne({
            buildingName : buildingInfo.buildingName,
            ownerId : buildingInfo.ownerId
        })
        
        if(!isBuildingExist){
            const postData = new Building(buildingInfo)
            const result = await postData.save()
            return result
        } else{
            // console.log('exists')
            return "building name already existed with this owner"
        }
    } catch(err){
        return err
    } 
}

export const getBuildingRepo = async(ownerId) => {
    try{
        const result = await Building.find({
            ownerId : ownerId
        })
        return result
    } catch(err){
        return err
    }
}

export const putBuildingRepo = async(buildingId, buildingInfo) => {
    try{
        const result = await Building.findByIdAndUpdate(buildingId, buildingInfo, {new : true, runValidators : true} )
        return result
    } catch(err){
        return err
    }
    
}

export const deleteBuildingRepo = async(buildingId) => {
    try{
        const result = await Building.findByIdAndDelete(buildingId)
        return result
    } catch(err){
        return err
    }
}
