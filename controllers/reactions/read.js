import { Reaction } from '../../models/Reaction.js'
import { Manga } from '../../models/Manga.js'

const controller = {
    read: async (req, res, next) => {
        try {
            let order = { title: 1 }
            if (req.query.order == 1 || req.query.order == -1) {
                order.title = req.query.order
            }

            let pagination = { page: 1, limit: 6 }
            if (req.query.page) {
                pagination.page = Number(req.query.page)
            }

            let skip = pagination.page > 1 ? (pagination.page - 1) * pagination.limit : 0

            if (req.query.manga_id && !req.query.me) {
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
            if (req.query.manga_id && req.query.me) {
                let query = {}
                query.manga_id = req.query.manga_id
                query.user_id = req.user._id

                let reactions = await Reaction.find(query)

                return res.status(200).json({
                    success: true,
                    message: reactions
                })
            }
            if (req.query.name) {
                let query = {}
                query.user_id = req.user._id
                query.name = req.query.name

                let reactions = await Reaction.find(query)
                    .select("manga_id -_id")
                let favouritesMangas = []
                for(let reaction of reactions){
                    favouritesMangas.push(reaction.manga_id)
                }
                let mangasQuery = {
                    _id: favouritesMangas
                }
                if (req.query.category) {
                    mangasQuery.category_id = req.query.category.split(',')
                    pagination.limit = 10
                }
                let mangas = await Manga.find(mangasQuery)
                    .sort(order)
                    .skip(skip)
                    .limit(pagination.limit > 0 ? pagination.limit : 0)

                return res.status(200).json({
                    success: true,
                    message: mangas
                })
            }
        } catch (error) {
            next(error)
        }

    }
}

export default controller