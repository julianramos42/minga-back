import express from 'express'
import User from '../models/User.js'
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('aca tendrian que estar los usuarios');
});

router.post('/', async (req,res) => {
  try{
    req.body.is_online = false
    req.body.is_admin = false
    req.body.is_author = false
    req.body.is_company = false
    req.body.is_verified = false
    req.body.verify_code = false
    let user = await User.create(req.body)
    return res.status(201).json({
      success: true,
      user: user,
      id: user._id
    })
  } catch(error){
    console.log(error)
    return res.status(400).json({
      success: false,
      message: 'no se pudo crear'
    })
  }
})

export default router
