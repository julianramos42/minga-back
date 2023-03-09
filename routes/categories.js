import express from 'express'
import allController from '../controllers/category/all.js'

const { all } = allController

let router = express.Router();

router.get('/', all)

export default router