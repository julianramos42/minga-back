import { Manga } from '../../models/Manga.js'
import { Company } from '../../models/Company.js'

const controller = {

    getOne: async (req, res, next) => {
        try {
            const manga = await Manga.findOne({ _id: req.params.id })
                .select("title cover_photo description author_id category_id company_id _id")
                .populate('category_id', "name -_id")
                .populate('author_id', "name _id")
                .populate({path: 'company_id'})

            if (manga) {
                return res
                    .status(200)
                    .json({
                        manga: manga
                    })
            } else {
                return res.status(404).json({
                    success: false,
                    message: "This manga dont exist already!",
                });
            }

        } catch (error) {
            next(error)
        }
    }
}



export default controller