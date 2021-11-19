import mongoose from 'mongoose'

const roomSchema = mongoose.Schema({
    roomName : {
        type : String,
        required : true
    },
    roomRent : {
        type : Number,
        required : true
    },
    roomType : {
        type : String,
        required : true
    },
    buildingId : {
        type : String,
        required : true
    },
    roomImages : {
        type : Array,
        required : true
    },
    isVacant : {
        type : Boolean,
        default: true
    },
    ownerId : {
        type : String,
        required : true
    }
})

const Room = mongoose.model('room', roomSchema)
export default Room