import { Company } from '../../models/Company.js'
import createError from "http-errors";


const controller = {
    update_active: async (req, res, next) => {
        try {
            let company = await Company.findOneAndUpdate(
                { _id: req.params.id },
                { active: req.body.active },
                { new: true },
            )
            return res.status(200).json({
                success: true,
                company
            })
        } catch (error) {
            return next(createError(400, error));
        }
    }
}

export default controller;