import express from 'express'
import createComment from '../controllers/comments/create.js'
import validator from '../middlewares/validator.js'
import commentSchema from '../schemas/comments.js'
import passport from '../middlewares/passport.js'
import readComment from '../controllers/comments/all_from_chapter.js'

let router = express.Router();

const { create } = createComment
const { read } = readComment

router.post('/', passport.authenticate("jwt", { session: false }), validator(commentSchema), create)
router.get('/', read)


export default router