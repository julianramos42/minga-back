import { Reaction } from '../../models/Reaction.js'

const controller = {
    read: async (req, res, next) => {
        try {
            if (req.query.manga_id && !req.query.user_id) {
                let query = {}
                query.manga_id = req.query.manga_id

                let likes = await Reaction.countDocuments({ name: 'like', manga_id: req.query.manga_id })
                let dislike = await Reaction.countDocuments({ name: 'dislike', manga_id: req.query.manga_id })
                let surprise = await Reaction.countDocuments({ name: 'surprise', manga_id: req.query.manga_id })
                let love = await Reaction.countDocuments({ name: 'love', manga_id: req.query.manga_id })

                return res.status(200).json({
                    success: true,
                    message: {
                        likes,
                        dislike,
                        surprise,
                        love
                    }
                })
            }
            if (req.query.manga_id && req.query.user_id) {
                let query = {}
                query.manga_id = req.query.manga_id
                query.user_id = req.query.user_id

                let reactions = await Reaction.find(query)

                return res.status(200).json({
                    success: true,
                    message: reactions
                })
            }
            if (req.query.user_id && req.query.name) {
                let query = {}
                query.user_id = req.query.user_id
                query.name = req.query.name

                let reactions = await Reaction.find(query)

                return res.status(200).json({
                    success: true,
                    message: reactions
                })
            }
        } catch (error) {
            next(error)
        }

    }
}

export default controller