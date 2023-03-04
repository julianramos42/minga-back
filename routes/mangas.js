import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middlewares/validator.js'
import mangaCreate from '../controllers/mangas/create.js'
import exist_title from '../middlewares/mangas/exists_title.js'
import is_active from '../middlewares/authors/is_active.js'
import passport from '../middlewares/passport.js'

let router = express.Router()
const { create } = mangaCreate


router.post("/", passport.authenticate('jwt',{session:false}) ,validator(mangaSchema),exist_title, create);

export default router