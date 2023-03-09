import express from 'express'
import create_chapther from '../controllers/chapters/create.js'
import read_all_chapther from '../controllers/chapters/read_all.js'
import chaptherSchemas from '../schemas/chapthers.js'
import validator from '../middlewares/validator.js'
import nextOrder from '../middlewares/chapthers/next_order.js'
import addFrontPhoto from '../middlewares/chapthers/add_front_photo.js'
import existsOrder from '../middlewares/chapthers/exists_order.js'
import passport from '../middlewares/chapthers/passport.js'
import getChapter from '../controllers/chapters/get_chapthers.js'

const {create} = create_chapther
const {read_all} = read_all_chapther
const {get_chapther} = getChapter
let router = express.Router();

router.get('/', get_chapther);
router.get('/', read_all);

router.post('/', passport.authenticate('jwt',{session:false}),validator(chaptherSchemas),existsOrder,nextOrder,addFrontPhoto,create)

export default router