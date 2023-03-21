import express from 'express'
import userRouter from './users.js'
import mangaRouter from './mangas.js'
import chapterRouter from './chapters.js'
import authorRouter from './authors.js'
import categoriesRouter from './categories.js'
import commentsRouter from './comments.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/mangas',mangaRouter)
router.use('/chapters', chapterRouter )
router.use('/auth',userRouter)
router.use('/authors',authorRouter)
router.use('/categories',categoriesRouter)
router.use('/comments',commentsRouter)

export default router