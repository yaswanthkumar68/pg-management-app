import express from 'express'
import cors from 'cors'
import dbConfig from './src/configuration/dbConfig.js'
import router from './src/configuration/routes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
app.use(express.static('public'))


// db connection
dbConfig()

app.listen('3601', async() => {
    console.log("server is running")
})
