import { Manga } from "../../models/Manga.js";

const controller = {
    read_me: async (req,res) => {
        try {
            let mangas = await Manga.find({author_id: req.body.author_id})
            return res.status(200).json({
                success: true,
                mangas
            })
        }catch(error){
            return res.status(400).json({
                success: false
            })
        }
    }
}

export default controller