import { Comment } from "../../models/Comment.js";

const controller = {
    update: async (req, res, next) => {
        try {
            let { id } = req.params
            let upd = await Comment.findOneAndUpdate(
                { _id: id },
                req.body,
                { new: true },
            )
                .select('text')
            if (upd) {
                return res.status(200).json({
                    success: true,
                    upd
                })
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Comment not found"
                });
            }
        } catch (error) {
            next(error)
        }
    },
}
export default controller