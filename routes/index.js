import express from 'express'
import userRouter from './users.js'
import mangaRouter from './mangas.js'
import chapterRouter from './chapters.js'
import authorRouter from './authors.js'
import categoriesRouter from './categories.js'
import commentsRouter from './comments.js'
import reactionsRouter from './reactions.js'
import donationsRouter from './donations.js'
import companiesRouter from './companies.js'

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
router.use('/reactions', reactionsRouter)
router.use('/donate',donationsRouter)
router.use('/companies',companiesRouter)

export default router