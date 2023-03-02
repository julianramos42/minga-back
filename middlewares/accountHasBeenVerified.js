async function accountHasBeenVerified(req,res,next){
    if(req.user.is_verified){
        return next()
    }
    return res.status(400).json({
        success: false,
        message: 'User is not verified',
        is_verified: req.user.is_verified
    })
}

export default accountHasBeenVerified