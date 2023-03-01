import express from 'express'
import Chapther from '../models/Chapther.js';

let router = express.Router();

router.get('/', function (req, res, next) {
    res.send('aca tendrian que estar los capitulos');
});

router.post('/', async (req, res) => {
    try { 
  
        let chapther = await Chapther.create(req.body)
        return res.status(201).json({
            success: true,
            chapther: chapther,
            id: chapther._id
    
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: 'no se pudo crear',
            body: req.body
        })
    }
})

export default router