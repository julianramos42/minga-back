import Chapther from "../../models/Chapther.js"

const controller = {
    create: async (req, res) => {
        try {
            req.body.order = Number(req.body.order)
            let chapther = await Chapther.create(req.body)
            return res.status(201).json({
                success: true,
                chapther: chapther,
                id: chapther._id,
                data: req.user

            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                success: false,
                message: 'chapther cannot by create',

            })
        }

    }
}

export default controller
