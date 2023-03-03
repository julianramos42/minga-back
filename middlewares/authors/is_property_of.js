import Author from "../../models/Author.js"
import Manga from '../../models/Manga.js'

async function is_property_of(req,res,next){
    const author = await Author.findOne({user_id: req.user._id})
    const manga = await Manga.findOne({author_id: author._id})
    if(manga){
        next()
    }
    return res.status(400).json({
        success: false,
        message: 'No authors match with that manga'
    })
}

export default is_property_of