import mongoose from 'mongoose'

const tenantSchema = mongoose.Schema({
    tenantName : {
        type : String,
        required : true
    },
    tenantEmail : {
        type : String,
    },
    tenantMobile : {
        type : String,
        required : true
    },
    tenantIdentityProof : {
        type : String,
        required : true
    },
    isResiding : {
        type : Boolean,
        default : true
    },
    buildingId : {
        type : String,
        required : true
    },
    roomId : {
        type : String,
        required : true
    },
    ownerId : {
        type : String,
        required : true
    }

})

const Tenant = mongoose.model('tenant', tenantSchema)
export default Tenant