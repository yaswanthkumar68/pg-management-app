import {
    postTenantRepo,
    deleteTenantRepo,
    getTenantRepo,
    putTenantRepo
} from '../repositaries/tenantRepo.js'

export const postTenantService = async(tenantInfo, images) => {
    tenantInfo.tenantIdentityProof = images.filename
    const result = await postTenantRepo(tenantInfo)
    return result
}

export const putTenantService = async(tenantId, tenantInfo, images) => {
    tenantInfo.tenantIdentityProof = images.filename
    const result = await putTenantRepo(tenantId, tenantInfo)
    return result
}

export const deleteTenantService = async(tenantId) => {
    const result = await deleteTenantRepo(tenantId)
    return result
}

export const getTenantService = async(ownerId) => {
    const result = await getTenantRepo(ownerId)
    return result
}