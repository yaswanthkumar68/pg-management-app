import mongoose from 'mongoose'

const buildingSchema = mongoose.Schema({
    buildingName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    landmark : {
        type : String
    },
    ownerId : {
        type : String,
        required : true
    }
})

const Building = mongoose.model('Building', buildingSchema)
export default Building
