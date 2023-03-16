import { Manga } from "../../models/Manga.js";

const controller = {
    read_me: async (req,res) => {
        try {
            let mangas = await Manga.find({author_id: req.body.author_id})
            if(mangas){
                return res.status(200).json({
                    success: true,
                    mangas
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: "Mangas not found"
                })
            }
        }catch(error){
            return res.status(400).json({
                success: false
            })
        }
    }
}

export default controller