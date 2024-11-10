const express=require('express')
const app=express()
const env = require('dotenv')
env.config({
    path:'./.env'
})

// console.log(process.env.DB_LINK)
let userRoute = require('./Router/userRouter')

const db = require('./DatabaseConfig')
db()

app.use(express.json())
app.use('/users', userRoute)

app.listen(3000, ()=>{
    console.log("Server is running")
})