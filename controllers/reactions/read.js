import { Reaction } from '../../models/Reaction.js'

const controller = {
    read: async (req, res, next) => {
        try {
            let query = {}
            query.user_id = req.user.id
            if(req.query.manga_id){
                query.manga_id = req.query.manga_id
            }
            if(req.query.user_id){
                query.user_id = req.query.user_id
            }

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