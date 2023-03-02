import Chapther from "../../models/Chapther.js";

async function nextOrder(req, res, next) {

    if (req.body.order) {
        next()

    } else {

        const chapther = await Chapther.findOne({ manga_id: req.body.manga_id }).sort("-order")  //buscar en todos los chapther con el mismo manga.id, el que tenga el order mayor
        req.body.order = chapther.order + 1
        next()
    }
}

export default nextOrder