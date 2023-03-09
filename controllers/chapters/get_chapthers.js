import Chapther from '../../models/Chapther.js'


const controller = {
    get_chapther: async (req, res, next) => {
        let chapthers = {} 
        let pagination = { //configuracion de la pagina 
            page: 1,
            limit: 4,
        }
        if (req.query.manga_id) {
            chapthers.manga_id = req.query.manga_id
        }
        if (req.query.page) {
            pagination.page = req.query.page
        }
        try {
            let chapther = await Chapther.find(chapthers)
            .select('title order cover_photo -_id')
            .sort({order:1})
            .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
            .limit(pagination.limit > 0 ? pagination.limit : 0)
            return res.status(200).json({chapther})
        }catch (error){
            next (error)
        }

    }
}
export default controller