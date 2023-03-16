import { Manga } from "../../models/Manga.js";

const controller = {
    update: async (req,res) => {
        try{
            let mangas = await Manga.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {new: true}
            )
            return res.status(200).json({
                success: true,
                mangas
            })
        }catch(error){
            return res.status(400).json({
                success: false,
            })
        }
    }
}

export default controller