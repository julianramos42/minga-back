import express from 'express'
import userRouter from './users.js'
import chaptherRouter from './chapthers.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/chapthers', chaptherRouter )
router.use('/auth',userRouter)

export default router

