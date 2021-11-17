import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE

const dbConfig = async() => {
    try{
        await mongoose.connect(`mongodb+srv://yaswanth:${PASSWORD}@cluster0.mj2hj.mongodb.net/${DATABASE}?retryWrites=true&w=majority`)
        console.log('database is connected')
    } catch(err){
        console.log(err)
    }
}

export default dbConfig

