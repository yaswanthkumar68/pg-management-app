import Tenant from "../models/tenant.js";
import Building from "../models/building.js";
import Room from "../models/room.js";

export const postTenantRepo = async(tenantInfo) => {
    try{
        const buildingInfo = await Building.findOne({
            buildingName : tenantInfo.buildingId
        })
        const roomInfo = await Room.findOne({
            roomName : tenantInfo.roomId,
            buildingId : buildingInfo._id
        })
        if(roomInfo.isVacant){
            roomInfo.isVacant = false
    
            const roomUpdateInfo = await Room.findByIdAndUpdate(roomInfo._id, roomInfo)
            
            tenantInfo.buildingId = buildingInfo._id.toString()
            tenantInfo.roomId = roomInfo._id.toString()
            
            const postData = await new Tenant(tenantInfo)
            const result = await postData.save()
            return result
        } else{
            return "Tenant already present in this room"
        }
    } catch(err){
        return err
    }
}

export const deleteTenantRepo = async(tenantId) => {
    try{
        const tenantInfo = await Tenant.findOne({
            _id : tenantId
        })
        tenantInfo.isResiding = false
        const roomInfo = await Room.findOne({
            _id : tenantInfo.roomId   
        })
        roomInfo.isVacant = true
        const updatedRoomInfo = await Room.findByIdAndUpdate(roomInfo._id, roomInfo)
        const updatedTenantInfo = await Tenant.findByIdAndUpdate(tenantInfo._id, tenantInfo)
        return "Tenant details removed successfully"
    } catch(err){
        return err
    }
}

export const getTenantRepo = async(ownerId) => {
    try{
        const result = await Tenant.find({
            ownerId : ownerId
        })
        return result
    } catch(err){
        return err
    }
}

export const putTenantRepo = async(tenantId, tenantInfo) => {

}