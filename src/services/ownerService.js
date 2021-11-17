import {
    ownerLoginRepo,
    ownerRegisterRepo
} from '../repositaries/ownerRepo.js'

export const ownerRegisterService = async(ownerInfo) => {
    const result = await ownerRegisterRepo(ownerInfo)
    return result
}

export const ownerLoginService = async(ownerAuthDetails) => {
    const result = await ownerLoginRepo(ownerAuthDetails)
    return result
}