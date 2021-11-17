import mongoose from 'mongoose'

const ownerSchema = mongoose.Schema({
    // ownerId : {
    //     type : mongoose.Types.ObjectId
    // }, 
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }, 
    password : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    }
})

const Owner = mongoose.model('owner', ownerSchema)

export default Owner