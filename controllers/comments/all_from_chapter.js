import { Comment } from '../../models/Comment.js'

const controller = {
    read: async (req, res) => {
        try {
            let query = {}
            if(req.query.chapter_id){
                query.chapter_id = req.query.chapter_id
            }

            let pagination = { page: 1 }
            if (req.query.page) {
                pagination.page = Number(req.query.page)
                pagination.limit = 4
            }

            let skip = pagination.page > 1 ? (pagination.page - 1) * pagination.limit : 0

            let comments = await Comment.find(query)
                .sort({createdAt: 1})
                .skip(skip)
                .limit(pagination.limit > 0 ? pagination.limit : 0)
                .populate('user_id', '_id')

            return res.status(201).json({
                success: true,
                comments
            });
        } catch (err) {
            next(err)
        }
    }
}
export default controller // exporta el controlador