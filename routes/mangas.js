import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middlewares/validator.js'
import mangaCreate from '../controllers/mangas/create.js'
import allController from '../controllers/category/all.js'
import exist_title from '../middlewares/mangas/exists_title.js'
import is_active from '../middlewares/authors/is_active.js'
import passport from '../middlewares/passport.js'
// import finds_id from '../middlewares/auth/finds_id.js'

let router = express.Router()
const { create } = mangaCreate
const { all } = allController


router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  exist_title,
  is_active,
  validator(mangaSchema),
  create
);
router.get('/', all)

export default router