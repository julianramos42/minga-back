import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import updateMangaSchema from '../schemas/updateMangas.js'
import validator from '../middlewares/validator.js'
import mangaCreate from '../controllers/mangas/create.js'
import exist_title from '../middlewares/mangas/exists_title.js'
import is_active from '../middlewares/authors/is_active.js'
import is_property_of from '../middlewares/authors/is_property_of.js'
import passport from '../middlewares/passport.js'
import getMangaController from '../controllers/mangas/get_mangas.js'
import finds_id from '../middlewares/auth/finds_id.js'
import get_One from '../controllers/mangas/get_one.js'
import mangasFromAuthor from '../controllers/mangas/get_mangas_from_author.js'
import getMeMangas from '../controllers/mangas/get_me.js'
import updateMangas from '../controllers/mangas/update.js'
import destroyMangas from '../controllers/mangas/destroy.js'

let router = express.Router()
const { create } = mangaCreate
const { read } = getMangaController
const { getOne } = get_One
const { read_mangas_from_author } = mangasFromAuthor
const { read_me } = getMeMangas
const { update } = updateMangas
const { destroy } = destroyMangas

router.post("/", passport.authenticate("jwt", { session: false }), exist_title, finds_id, is_active, validator(mangaSchema), create);
router.get('/', passport.authenticate('jwt', { session: false }), read)
router.get('/me', passport.authenticate('jwt', { session: false }), finds_id, read_me)
router.get('/:id', passport.authenticate('jwt', { session: false }), getOne)
router.get('/authors/:author_id', passport.authenticate('jwt', { session: false }), read_mangas_from_author)
router.put('/:id', passport.authenticate('jwt', { session: false }), validator(updateMangaSchema),finds_id, is_active, is_property_of, update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), finds_id, is_active, is_property_of, destroy)

export default router