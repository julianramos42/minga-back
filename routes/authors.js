import express from 'express'
import controller from '../controllers/authors/create.js';
import readController from '../controllers/authors/get_one.js'
import passport from '../middlewares/passport.js';
import validator from '../middlewares/validator.js';
import schemaAuthors from '../schemas/authors.js'

const {create} = controller
const {read_one} = readController

let router = express.Router();

router.get('/:id', passport.authenticate("jwt", { session:false }), read_one)
router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaAuthors), create)

export default router