import express from 'express'
import controller from '../controllers/auth/auth.js'
import controllerVerify from '../controllers/auth/verify.js'
import validator from '../middlewares/validator.js'
import schemaSignUp from '../schemas/usersSignUp.js'
import schemaSignIn from '../schemas/usersSignIn.js'
import accountExistsSignUp from '../middlewares/accountExistsSignUp.js'
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js'
import accountHasBeenVerified from '../middlewares/accountHasBeenVerified.js'
import passwordIsOk from '../middlewares/passwordIsOk.js'
import passport from '../middlewares/passport.js'


const { verify } = controllerVerify
const { sign_up,sign_in,sign_out,token } = controller

let router = express.Router();

router.post('/signup', validator(schemaSignUp), accountExistsSignUp, sign_up)
router.post('/signin', validator(schemaSignIn), accountExistsSignIn, accountHasBeenVerified, passwordIsOk,sign_in)
router.post('/token', passport.authenticate('jwt', {session:false}), token)
router.post('/signout', passport.authenticate('jwt', {session:false}), sign_out)
router.get('/verify/:verify_code', verify )

export default router
