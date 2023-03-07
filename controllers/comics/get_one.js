// import Manga from '../../models/Manga.js'
import User from '../../models/User.js'

const controller ={

all: async (req,res,next)=> {
    try{
        let all = await User.find()
        return res.status(200),json( {users: all})
    } catch(err){
        next(err)
    }
}

}

export default controller