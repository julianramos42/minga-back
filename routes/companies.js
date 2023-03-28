import express from 'express'
import controller from '../controllers/company/create.js'
import readAll from '../controllers/company/read_all.js'
import schema from '../schemas/companies.js'
import validator from '../middlewares/validator.js'
import passport from '../middlewares/passport.js'
import companyActive from '../controllers/company/read_all_active.js'
import updateActive from '../controllers/company/update_active.js'
import alreadyExists from '../middlewares/companies/alreadyExists.js'

const { create } = controller
const { read_all } = readAll
const { read_all_active } = companyActive
const {update_active} = updateActive

let router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), validator(schema), alreadyExists, create)
router.get('/', read_all)

router.get('/admin', passport.authenticate("jwt", { session:false }), read_all_active)
router.put('/admin/:id', passport.authenticate("jwt", { session:false }), update_active)

export default router