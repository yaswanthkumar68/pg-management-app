import {
    postRoomService,
    getRoomService,
    putRoomService,
    getAllRoomsservice,
    getRoomByIdService,
    deleteRoomService
} from '../services/roomService.js'

export const postRoomController = async(req, res, next) => {
    const roomInfo = {...req.body, ownerId : req.ownerId}
    const images = req.files
    try{
        const result = await postRoomService(roomInfo, images)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}

export const getRoomController = async(req, res, next) => {
    const buildingId = req.params.id
    
    try{
        const result = await getRoomService(buildingId)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}

export const getAllRoomsController = async(req, res, next) => {
    try{
        const result = await getAllRoomsservice()
        return res.json(result)
    } catch(err){
        return res.json(result)
    }
}

export const getRoomByIdController = async(req, res, next) => {
    const roomId = req.params.id
    try{
        const result = await getRoomByIdService(roomId)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}

export const putRoomController = async(req, res, next) => {
    const roomId = req.params.id
    const roomInfo = {...req.body, ownerId : req.ownerId}
    const images = req.files
    try{
        const result = await putRoomService(roomInfo, images, roomId)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}

export const deleteRoomController = async(req, res, next) => {
    const roomId = req.params.id
    try{
        const result = await deleteRoomService(roomId)
        return res.json(result)
    } catch(err){
        return res.json(err)
    }
}