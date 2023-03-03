import Chapther from "../../models/Chapther.js";

async function nextOrder(req, res, next) {

    if (!req.body.order ) {
        let chapther = await Chapther.find({ manga_id: req.body.manga_id }).sort("-order")  //buscar en todos los chapther con el mismo manga.id, el que tenga el order mayor
        chapther = chapther[0]
        req.body.order = chapther.order + 1
    console.log(chapther)
    }
    

    next()
}

export default nextOrder