const UserSchema = require('../models/userModel')

let register = async (req, res) => {
    let { name, email, password } = req.body

    try {
        let data = await UserSchema.create({ name, email, password })

        res.json({ msg: 'Registered Successfully!', success: true, data })
    } catch (error) {
        res.json({ msg: 'Error !', success: false, error: error.message })
    }
}


let login = async (req, res) => {
    let { email, password } = req.body

    let user = await UserSchema.findOne({ email })
    if (user) {
        if (password == user.password) {
            res.json({ msg: 'Login Successfully!', success: true, user })
        }
        else {
            res.json({ msg: 'Wrong Password!', success: false })
        }
    }
    else{
    res.json({msg:'User not found!', success:false})

    }
}


module.exports = {
    register,
    login
}