import User from "../../models/User.js"
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const controller = {
    sign_up: async (req, res, next) => {
        req.body.is_online = false
        req.body.is_admin = false
        req.body.is_author = false
        req.body.is_company = false
        req.body.is_verified = true
        req.body.verify_code = crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try {
            await User.create(req.body)
            return res.status(200).send('user registered!')
        } catch (error) {
            next(error)
        }
    },

    sign_in: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { mail: req.user.mail },
                { is_online: true },
                { new: true }
            )
            user.is_admin = null
            user.is_author = null
            user.is_company = null
            user.is_online = null
            user.is_verified = null
            user.password = null
            user.verify_code = null
            user.updatedAt = null

            const token = jwt.sign(
                { id: user._id },
                process.env.SECRET,
                { expiresIn: 60*60*24 }
            )
            return res.status(200).json({user, token})
        } catch (err) {
            next(err)
        }
    },

    sign_out: async (req, res, next) => {
        const { mail } = req.user
        try {
            await User.findOneAndUpdate(
                { mail },
                { is_online: false },
                { new: true }
            )
            return res.status(200).json('offline user!')
        } catch (err) {
            next(err)
        }
    },

    token: async (req, res, next) => {
        const { user } = req

        user.is_admin = null
        user.is_author = null
        user.is_company = null
        user.is_online = null
        user.is_verified = null
        user.password = null
        user.verify_code = null
        user.updatedAt = null
        
        try {
        return res.status(200).json(user)
        } catch (error) {
        next(error)
        }
    }
       
}

export default controller