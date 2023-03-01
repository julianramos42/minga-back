async function accountHasBeenVerified(req,res,next){
    if(req.user.is_verified){
        return next()
    }
    return res.status(400).json('User is not verified')
}

export default accountHasBeenVerified