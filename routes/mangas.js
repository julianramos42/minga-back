import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middlewares/validator.js'
import mangaCreate from '../controllers/mangas/create.js'
import allController from '../controllers/category/all.js'
// import exist_title from '../middlewares/mangas/exists_title.js'
import is_active from '../middlewares/authors/is_active.js'
// import passport from '../middlewares/passport.js'
import jwtmiddleware from '../middlewares/jwtmiddleware.js'

let router = express.Router()
const { create } = mangaCreate
const { all } = allController


router.post("/",jwtmiddleware ,validator(mangaSchema), create);
router.get('/', all)

export default router