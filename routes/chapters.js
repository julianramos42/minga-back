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


const { get_one } = chapterController


router.get("/:id", get_one);

const {create} = create_chapter
const {get_chapter} = getChapter
let router = express.Router();

router.get('/',passport.authenticate('jwt',{session:false}), get_chapter);

router.post('/', passport.authenticate('jwt',{session:false}),validator(chapterSchemas),existsOrder,nextOrder,addFrontPhoto,create)

export default router