import {Author} from "../../models/Author.js"
async function finds_id(req,res,next){
    console.log(req.user.id)
    const author = await Author.findOne({user_id: req.user.id})
    if(author){
        req.body.author_id = author._id
        console.log({ user: req.user });
        // console.log(req.body);
        return next()
    }

   
    return res.status(400).json({
        success: false,
        message: 'No authors founded 123'
    })

    console.log(req.user)

    next()
}

export default finds_id