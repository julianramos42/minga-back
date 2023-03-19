import express from 'express'
import validator from '../middlewares/validator.js'
import reactionSchema from '../schemas/reactions.js'
import createReaction from '../controllers/reactions/create.js'
import passport from '../middlewares/chapters/passport.js'
import readReaction from '../controllers/reactions/read.js'

let router = express.Router()

const {create} = createReaction
const {read} = readReaction

router.get('/', read)
router.post('/', passport.authenticate('jwt',{session:false}), validator(reactionSchema), create)

export default router