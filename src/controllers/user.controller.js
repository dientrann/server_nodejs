import userModel from '../models/user.model.js'

export default {
    findAll: (req, res)=>{
        if(req.query.userId){
            let user = userModel.findById(req.query.userId)
            return res.status(user ? 200 : 500).json({
                message: user ? 'User found' : 'User not found',
                data: user ? user: null
            })
        }
        let users = userModel.findAll()
        return res.status(200).json(users)
    },
}