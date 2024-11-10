const mongoose=require('mongoose')
// console.log(process.env.DB_LINK)
const connection = ()=>{
    // mongoose.connect('mongodb://localhost:27017/aditya')
    mongoose.connect(process.env.DB_LINK)
    .then(()=>console.log('Database Connected!😎'))
    .catch((error)=>console.log(error))
}

module.exports = connection