import express from 'express'
import controller from '../controllers/authors/create.js';
import passport from '../middlewares/passport.js';
import validator from '../middlewares/validator.js';
import schemaAuthors from '../schemas/authors.js'

const {create} = controller

let router = express.Router();

router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaAuthors), create)

export default router