import express from 'express';
import { findPartner, getPartner } from '../controllers/findPartnerController.js'
import { verifyToken } from './../utils/verifyUser.js';


const router = express.Router()

router.post('/findPartner', verifyToken, findPartner)
router.get('/findPartner', verifyToken, getPartner)

export default router
