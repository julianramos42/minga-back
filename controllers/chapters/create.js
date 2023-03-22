import {Chapter} from "../../models/Chapter.js"

const controller = {
    create: async (req, res, next) => {
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
            next(error)
        }

    }
}

export default controller
