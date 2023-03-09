import {Chapter} from "../../models/Chapter.js";

async function nextOrder(req, res, next) {

    if (!req.body.order) {
        
        let chapter = await Chapter.find({ manga_id: req.body.manga_id }).sort("-order")  //buscar en todos los chapter con el mismo manga.id, el que tenga el order mayor
        if (chapter.length === 0) {
            req.body.order = 1
            next()
        }else{
            req.body.order = chapter[0].order + 1
            next()
        }
    }else{
        next()
    }
}

export default nextOrder