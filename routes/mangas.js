import express from "express";
import mangas from "../schemas/mangas.js";
import validator from "../middleware/validator.js"
import controller from '../controllers/mangas/create.js'
import exists_title from '../middleware/mangas/exists_title.js'
const {create} = controller

let router = express.Router();

/* GET users listing. */
router.get("/",function (req, res, next) {
  res.status(200).send("New Manga");
});
router.post("/",validator(mangas), exists_title ,create);

export default router;