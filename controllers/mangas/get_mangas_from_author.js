import {Author} from '../../models/Author.js'
import { Manga } from "../../models/Manga.js";

const controller = {
    read_mangas_from_author: async (req,res,next) => {
        try{
            const query = {
                new: "true"
            }
            if(req.query.new){
                query.new = req.query.new
            }

            const order = { title: 1 }
            if(query.new == "false"){
                order.title = -1
            }

            
            if(req.params.author_id){
                const author = await Author.findOne({_id: req.params.author_id})

                if(author){
                    const mangasOfAuthor = await Manga.countDocuments({author_id: author._id})

                    const mangas = await Manga.find({author_id: author._id})
                    .sort(order)
                    .limit(mangasOfAuthor < 4 ? mangasOfAuthor : Math.ceil(mangasOfAuthor/2))
                    
                    return res.status(200).json({
                        success: true,
                        mangas
                    })
                }
            }
            return res.status(404).json({
                success: false,
                message: "No authors found"
            })
        }catch(error){
            next(error)
        }
    }
}

export default controller