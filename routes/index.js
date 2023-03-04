import express from 'express'
import userRouter from './users.js'
import mangaRouter from './mangas.js'
// import categoriasRouter from './categories.js'
import chaptherRouter from './chapthers.js'
import authorRouter from './authors.js'
import categoryRouter from "./categories.js"

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users',userRouter)
router.use('/mangas',mangaRouter)
router.use("/categories", categoryRouter);
router.use('/chapthers', chaptherRouter )
router.use('/auth',userRouter)
router.use('/authors',authorRouter)

export default router

