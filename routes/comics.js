import express from "express"
import controller from '../controllers/comics/get_comics.js'
import passport from '../middlewares/passport.js'

const {read} = controller

let router = express.Router()

router.get('/', passport.authenticate('jwt', {session:false}), read)

export default router