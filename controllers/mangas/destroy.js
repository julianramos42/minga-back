import { Manga } from "../../models/Manga.js";

const controller = {
    destroy: async (req,res) => {
        try{
            let manga = await Manga.findOneAndDelete(
                { _id: req.params.id }
            )
            if(manga){
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
            return res.status(400).json({
                success: false
            })
        }
    }
}

export default controller