

import express from 'express';
import { createNews, loginUniversity , getAllNews , getNewsById , updateNews , deleteNews } from '../controller/university.controller.js';

const router = express.Router();


router.post('/' , loginUniversity);
router.post('/createNews' , createNews);
router.get('/' , getAllNews);
router.get('/:id' , getNewsById);
router.put('/:id' , updateNews);
router.delete('/:id' , deleteNews);


export default router;
