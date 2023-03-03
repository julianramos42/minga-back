import Manga from '../../models/Manga.js'

const controller = {
    create : async (req, res) => { //create es el modelo
        try {
          req.body.author_id = "63fe8112f09373806fd89fe5"
    
          let manga = await Manga.create(req.body);
          return res.status(201).json({
            success: true,
            message: "A new Manga could be created",
    
          });
        } catch (err) {
          console.log(err);
          return res.status(400).json({
            success: false,
            message: "Could not create a new Manga",
          });
        }
      } 
}
export default controller // exporta el controlador