import  {Manga}  from '../../models/Manga.js'



const controller = {

    getOne: async (req, res) => {
        const manga = await Manga.findOne({ _id: req.params.id })
            .select("title cover_photo description author_id category_id _id")
            .populate('category_id', "name -_id")
            .populate('author_id', "name -_id")

        if (manga) {
            return res
                .status(200)
                .json({
                    manga: manga
                })
        } else {
            return res.status(400).json({
                success: false,
                message: "This manga dont exist already!",
            });
        }

    }
}



export default controller