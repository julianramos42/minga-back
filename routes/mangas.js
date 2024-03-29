import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middlewares/validator.js'
import mangaCreate from '../controllers/mangas/create.js'
import exist_title from '../middlewares/mangas/exists_title.js'
import is_active from '../middlewares/authors/is_active.js'
import passport from '../middlewares/passport.js'
import getMangaController from '../controllers/mangas/get_mangas.js'
// import finds_id from '../middlewares/auth/finds_id.js'
import get_One from '../controllers/mangas/get_one.js'
import mangasFromAuthor from '../controllers/mangas/get_mangas_from_author.js'

let router = express.Router()
const { create } = mangaCreate
const { read } = getMangaController
const { getOne } = get_One
const { read_mangas_from_author } = mangasFromAuthor


router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  exist_title,
  is_active,
  validator(mangaSchema),
  create
);

router.get('/', passport.authenticate('jwt', {session:false}), read)
router.get('/:id',passport.authenticate('jwt', {session:false}),getOne)
router.get('/authors/:author_id', passport.authenticate('jwt', {session:false}), read_mangas_from_author)

export default router