import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { __dirname } from './utils.js'
import indexRouter from './routes/index.js'
import mangaRouter from './routes/mangas.js'
import cors from 'cors'
import './config/database.js' //requiero la configuracion de la db

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use("/mangas",mangaRouter);

function errorNotFound(req, res, next){
    next(createError(404, 'La ruta no existe'))
  }
app.use(errorNotFound)

export default app