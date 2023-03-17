import { Manga } from "../../models/Manga.js";
import { Chapter } from '../../models/Chapter.js'

const controller = {
    destroy: async (req,res,next) => {
        try{
            let manga = await Manga.findOneAndDelete(
                { _id: req.params.id }
            )
            if(manga){
                await Chapter.deleteMany(
                    {manga_id: req.params.id}
                )

                return res.status(200).json({
                    success: true,
                    message: "Manga successfully deleted",
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