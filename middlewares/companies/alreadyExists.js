import { Company } from "../../models/Company.js"

async function alreadyExists(req, res, next) {
    const company = await Company.findOne({ user_id: req.user._id })
    if (company) {
        if (company.active) {
            return res.status(400).json({
                success: false,
                message: 'You are already an active company'
            })
        } else {
            await Company.findOneAndUpdate(
                {_id: company._id},
                {active: true}
            )
            return res.status(200).json({
                success: true,
                message: "Welcome back "+company.name
            })
        }
    } else {
        next()
    }
}

export default alreadyExists