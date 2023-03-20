import {Chapter} from "../../models/Chapter.js"

const controller = {
    create: async (req, res) => {
        try {

                req.body.order = Number(req.body.order)
       
            let chapter = await Chapter.create(req.body)
            return res.status(201).json({
                success: true,
                order: req.body.order,
                pages: req.body.pages,
                chapter

            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                success: false,
                message: 'chapter cannot by create',

            })
        }

    }
}

export default controller
