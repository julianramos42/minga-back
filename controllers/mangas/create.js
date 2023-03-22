import {Manga} from '../../models/Manga.js'

const controller = {
    create : async (req, res, next) => { 
        try {
          
          let manga = await Manga.create(req.body);
          return res.status(201).json({
            success: true,
            message: "A new manga has been created",
            manga, 
          });
        } catch (err) {
          next(err)
        }
      } 
}
export default controller // exporta el controlador