import express from 'express'
import create_chapter from '../controllers/chapters/create.js'
import chapterSchemas from '../schemas/chapters.js'
import validator from '../middlewares/validator.js'
import nextOrder from '../middlewares/chapters/next_order.js'
import addFrontPhoto from '../middlewares/chapters/add_front_photo.js'
import existsOrder from '../middlewares/chapters/exists_order.js'
import passport from '../middlewares/chapters/passport.js'
import getChapter from '../controllers/chapters/get_chapters.js'
import chapterController from '../controllers/chapters/get_one.js'
import editChapter from '../schemas/editChapter.js'
import finds_id from '../middlewares/auth/finds_id.js'
import is_active from '../middlewares/authors/is_active.js'
import is_property_of from '../middlewares/authors/chapter_is_property_of.js.js'
import update_controller from '../controllers/chapters/update.js'
import destroyController from '../controllers/chapters/destroy.js'
import read_all from '../controllers/chapters/read_all.js'

let router = express.Router();
const { create } = create_chapter
const { get_chapter } = getChapter
const { get_one } = chapterController
const { update } = update_controller
const { destroy } = destroyController
const {get_all} = read_all

router.get("/:id", get_one);
router.get("/all/:id", get_all)
router.get('/', passport.authenticate('jwt', { session: false }), get_chapter);

router.put('/:id', passport.authenticate('jwt', { session: false }), validator(editChapter), finds_id, is_active, is_property_of, update)

router.delete('/:id', passport.authenticate('jwt', { session: false }), finds_id, is_active, is_property_of, destroy)

router.post('/', passport.authenticate('jwt', { session: false }), validator(chapterSchemas), existsOrder, nextOrder, addFrontPhoto, create)

export default router