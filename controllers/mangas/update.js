import { Manga } from "../../models/Manga.js";

const controller = {
    update: async (req,res,next) => {
        try{
            let manga = await Manga.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {new: true}
            )
            if(manga){
                return res.status(200).json({
                    success: true,
                    manga
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: "Manga not found"
                })
            }
        }catch(error){
            next(error)
        }
    }
}

export default controller