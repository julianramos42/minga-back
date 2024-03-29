import {Manga} from '../../models/Manga.js'

const controller = {
    read: async (req, res) => {
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

            let query = {}
            if (req.query.title) {
                query.title = new RegExp(req.query.title.trim(), 'i')
                pagination.limit = 10
                skip = 0
            }
            if (req.query.category) {
                query.category_id = req.query.category.split(',')
                pagination.limit = 10
            }

            let mangas = await Manga.find(query)
                .select("title category_id cover_photo _id")
                .sort(order)
                .skip(skip)
                .limit(pagination.limit > 0 ? pagination.limit : 0)
                .populate("category_id", "name -_id")

            if(mangas.length){
                return res
                .status(200)
                .json({
                    success: true,
                    mangas
                })
            }else{
                return res
                .status(404)
                .json({
                    success: false,
                    message: 'No mangas found'
                })
            }

        } catch (error) {
            return res
                .status(400)
                .json({
                    success: false,
                    error
                })
        }
    }
}

export default controller