import {
    postRoomRepo,
    getRoomRepo,
    putRoomRepo,
    getAllRoomsRepo,
    getRoomByIdRepo,
    deleteRoomRepo
} from '../repositaries/roomsRepo.js'

export const postRoomService = async(roomInfo, images) => {
    const imagesArray =  images.map((image) => {
        return image.filename
    })
    roomInfo.roomImages = imagesArray

    const result = await postRoomRepo(roomInfo)
    return result
    
}

export const putRoomService = async(roomInfo, images, roomId) => {
    const imagesArray =  images.map((image) => {
        return image.filename
    })
    roomInfo.roomImages = imagesArray
    
    const result = await putRoomRepo(roomInfo, roomId)
    return result
    
}

export const getRoomService = async(buildingId) => {
    const result = await getRoomRepo(buildingId)
    return result
}
export const getAllRoomsservice = async() => {
    const result = await getAllRoomsRepo()
    return result
}

export const getRoomByIdService = async(roomId) => {
    const result = await getRoomByIdRepo(roomId)
    return result
}

export const deleteRoomService = async(roomId) => {
    const result = await deleteRoomRepo(roomId)
    return result
}