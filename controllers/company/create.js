import { Company } from '../../models/Company.js'

const controller = {
    create: async (req, res, next) => {
        const { user } = req
        req.body.user_id = user._id
        req.body.active = false
        try {
            await Company.create(req.body)
            return res.status(200).json({
                success: true,
                message: 'New company created succesfuly, please wait to be activated by an administrator',
                data: req.body
            })
        } catch (error) {
            next(error)
        }
    }
}

export default controller