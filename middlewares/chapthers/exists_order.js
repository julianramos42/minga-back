import Chapther from "../../models/Chapther.js";

async function existsOrder (req,res,next){
   const chapther = await Chapther.findOne({manga_id: req.body.manga_id, order: req.body.order})
   if (chapther){
    return res.status(400).json('chapther already exist')
   } 
   return next()
}

export default existsOrder