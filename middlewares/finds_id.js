// NECESITO MODELO AUTHOR

async function finds_id(req,res,next){
    const author = await Author.findOne({user_id: req.user._id})
    if(author){
        req.body.author_id = author._id
        next()
    }
    return res.status(400).json({
        success: false,
        message: 'No authors founded'
    })
}

export default finds_id