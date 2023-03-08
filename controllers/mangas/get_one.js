import Manga from '../../models/Manga.js'


const controller ={

getOne: async (req,res,next)=> {
    try{
        const manga = await Manga.find().select('name')
        return res.status(200),json( {mangas: all})
    } catch(err){
        next(err)
    }
}

}

export default controller