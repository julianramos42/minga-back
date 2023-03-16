import {Manga} from '../../models/Manga.js'

const controller = {
    create : async (req, res) => { 
        try {
          
          let manga = await Manga.create(req.body);
          return res.status(201).json({
            success: true,
            message: "A new manga has been created",
    
          });
        } catch (err) {
          console.log(err);
          return res.status(400).json({
            success: false,
            message: "Cannot create a new Manga",
          });
        }
      } 
}
export default controller // exporta el controlador