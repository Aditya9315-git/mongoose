const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:String,
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:String
})

module.exports = mongoose.model('users', UserSchema)