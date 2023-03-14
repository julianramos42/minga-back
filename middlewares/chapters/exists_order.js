import {Chapter} from "../../models/Chapter.js";

async function existsOrder(req, res, next) {
   if (req.body.order) {
      const chapter = await Chapter.findOne({ manga_id: req.body.manga_id, order: req.body.order })

      if (chapter) {
         return res.status(400).json({
            success: false,
            message: 'chapter cannot by create',
           
        })
      }
   }
      
      return next()
   
}

export default existsOrder