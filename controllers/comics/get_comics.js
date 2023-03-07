//import Manga from '../../models/Manga.js'
import User from "../../models/User.js"

const controller = {
    read: async (req, res) => { 

        let pagination = { page: 1, limit: 6 }
        if(req.query.page){ pagination.page = req.query.page }
        if (req.query.quantity){ pagination.limit = req.query.quantity }

        let query = {}
        if(req.query.title){
            query.title = new RegExp(req.query.title.trim(),'i')
            pagination.limit = 10
        }
        if(req.query.category){
            query.category = req.query.category
            pagination.limit = 10
        }
        if(req.query.name){ query.name = new RegExp(req.query.name,'i'); pagination.limit=10 }
        if(req.query.mail){ query.mail = req.query.mail }
        //let mangas = await Manga.find()
        let users = await User.find(query)
            .select("name -_id")
            //.sort({ title: 1 })
            .sort({ name: 1 })
            .skip( pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0 )
            .limit( pagination.limit > 0 ? pagination.limit : 0 )

        return res
            .status(200) 
            .json({
                success: true,
                message: 'aca deberias ver todos los capitulos',
                users
            })
    }
}

export default controller