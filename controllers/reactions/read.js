import { Reaction } from '../../models/Reaction.js'

const controller = {
    read: async (req, res, next) => {
        try {
            let query = {}
            if(req.query.manga_id){
                query.manga_id = req.query.manga_id
            }
            if(req.query.user_id){
                query.user_id = req.query.user_id
            }
            if(req.query.name){
                query.name = req.query.name
            }
            let likes = await Reaction.countDocuments({name: 'like', manga_id: req.query.manga_id})
            let dislike = await Reaction.countDocuments({name: 'dislike', manga_id: req.query.manga_id})
            let surprise = await Reaction.countDocuments({name: 'surprise', manga_id: req.query.manga_id})
            let love = await Reaction.countDocuments({name: 'love', manga_id: req.query.manga_id})
            let reactions = await Reaction.find(query)

            return res.status(200).json({
                success: true,
                message: reactions
            })
        } catch (error) {
            next(error)
        }

    }
}

export default controller