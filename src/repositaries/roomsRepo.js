import Room from "../models/room.js";
import Building from "../models/building.js";
import Owner from "../models/owner.js";


export const postRoomRepo = async(roomInfo) => {
    try{
        const getBuildingId = await Building.findOne({
            buildingName : roomInfo.buildingId
        })
        roomInfo.buildingId = getBuildingId._id.toString()

        const isRoomExist = await Room.findOne({
            roomName : roomInfo.roomName,
            buildingId : roomInfo.buildingId
        })
        if(!isRoomExist){
            const postData = await new Room(roomInfo)
            const result = await postData.save()
            return result
        } else{
            return "room name already exist in this building"
        }
    } catch(err){
        console.log(err)
        return err
    }
}

export const putRoomRepo = async(roomInfo, roomId) => {
    try{
        const getBuildingId = await Building.findOne({
            buildingName : roomInfo.buildingId
        })
        roomInfo.buildingId = getBuildingId._id.toString()

        const result = await Room.findByIdAndUpdate(roomId, roomInfo, {new : true, runValidators : true})
        return result
    } catch(err){
        return err
    }
}

export const deleteRoomRepo = async(roomId) => {
    try{
        const result = await Room.findByIdAndDelete(roomId)
        return result
    } catch(err){
        return err
    }
}

export const getRoomRepo = async(buildingId) => {
    try{
        const result = await Room.find({
            buildingId : buildingId
        })
        return result
    } catch(err){
        return err
    }
}

export const getAllRoomsRepo = async() => {
    try{
        const result = await Room.find({
            isVacant : true
        })
        const getData = result.map((room) => {
            return {
                _id : room._id,
                roomName : room.roomName,
                roomRent : room.roomRent,
                roomType : room.roomType,
                isVacant : room.isVacant
            }
        })
        return getData
    } catch(err){
        return err
    }
}


export const getRoomByIdRepo = async(roomId) => {
    try{
        const getRoom = await Room.findOne({_id : roomId})
        const getBuilding = await Building.findOne({_id : getRoom.buildingId})
        const getOwner = await Owner.findOne({_id : getRoom.ownerId})

        const roomDetails = {
            roomName : getRoom.roomName,
            roomRent : getRoom.roomRent,
            roomType : getRoom.roomType,
            roomImages : getRoom.roomImages,
            isVacant : getRoom.isVacant,
            address : {
                buildingName : getBuilding.buildingName,
                buildingAddress : getBuilding.address,
                landmark : getBuilding.landmark
            },
            contact : {
                name : getOwner.userName,
                email : getOwner.email,
                mobile : getOwner.mobile
            }
        }
        return roomDetails
    } catch(err){
        return err
    }
}

