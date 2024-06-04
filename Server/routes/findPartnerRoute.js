import express from 'express';
import { findPartner } from '../controllers/findPartnerController.js'


const router = express.Router()

router.post('/findPartner', findPartner)

export default router
