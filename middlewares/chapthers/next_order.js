import Chapther from "../../models/Chapther.js";

async function nextOrder(req, res, next) {

    if (!req.body.order) {
        
        let chapther = await Chapther.find({ manga_id: req.body.manga_id }).sort("-order")  //buscar en todos los chapther con el mismo manga.id, el que tenga el order mayor
        if (chapther.length === 0) {
            req.body.order = 1
            next()
        }else{
            req.body.order = chapther[0].order + 1
            next()
        }
    }else{
        next()
    }
}

export default nextOrder