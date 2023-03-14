
import {Manga} from '../../models/Manga.js';

async function exists_title(req,res,next){
    const manga = await Manga.findOne({title: req.body.title})
    
    if(manga){
        return res.status(400).json({
            success: false,
            message: 'Manga already created'
        })
    }
    
    return next()
}

export default exists_title