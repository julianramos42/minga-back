import express from 'express'
import createComment from '../controllers/comments/create.js'
import validator from '../middlewares/validator.js'
import commentSchema from '../schemas/comments.js'
import passport from '../middlewares/passport.js'
import readComment from '../controllers/comments/all_from_chapter.js'
import updateComment from '../controllers/comments/update.js'
import destroyComment from '../controllers/comments/destroy.js'
import is_property_of from '../middlewares/comments/is_property_of.js'

let router = express.Router();

const { create } = createComment
const { read } = readComment
const { update } = updateComment
const { destroy } = destroyComment

router.get('/', read)
router.post('/', passport.authenticate("jwt", { session: false }), validator(commentSchema), create)
router.put('/:id', passport.authenticate("jwt", { session: false }), validator(commentSchema), is_property_of, update)
router.delete('/:id', passport.authenticate("jwt", { session: false }), is_property_of, destroy)


export default router