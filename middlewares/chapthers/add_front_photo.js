

async function addFrontPhoto (req,res,next){
    req.body.cover_photo = ""
    next()
}

export default addFrontPhoto