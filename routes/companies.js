import express from 'express'
import controller from '../controllers/company/create.js'
import readAll from '../controllers/company/read_all.js'
import schema from '../schemas/companies.js'
import validator from '../middlewares/validator.js'
import passport from '../middlewares/passport.js'


const { create } = controller
const { read_all } = readAll

let router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), validator(schema), create)
router.get('/', read_all)

export default router