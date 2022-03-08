import {
    postBuildingRepo,
    getBuildingRepo,
    putBuildingRepo,
    deleteBuildingRepo
} from '../repositaries/buildingsRepo.js'

export const postBuildingService = async(buildingInfo) => {
    const result = await postBuildingRepo(buildingInfo)
    return result
}

export const getBuildingService = async(ownerId) => {
    const result = await getBuildingRepo(ownerId)
    return result
}

export const putBuildingService = async(buildingId, buildingInfo) => {
    const result = await putBuildingRepo(buildingId, buildingInfo)
    return result
}

export const deleteBuildingService = async(buildingId) => {
    const result = await deleteBuildingRepo(buildingId)
    return result
}