import Chapther from "../../models/Chapther.js"

const controller = {
    create: async (req, res) => {
        try {

            let chapther = await Chapther.create(req.body)
            return res.status(201).json({
                success: true,
                chapther: chapther,
                id: chapther._id

            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                success: false,
                message: 'no se pudo crear',
               
            })
        }

    }
}

export default controller
