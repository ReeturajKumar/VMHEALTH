import express from 'express';
import { deleteDoctor, getAllDoctor, getDoctorProfile, getSingleDoctor, updateDoctor } from '../controller/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

import reviewRouter from './reviewRoute.js';


const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/",  getAllDoctor);
router.put("/:id",authenticate, restrict(['doctor']), updateDoctor);
router.delete("/:id",authenticate, restrict(['doctor']), deleteDoctor);

router.get('/profile/me', authenticate, restrict(['doctor', 'patient']), getDoctorProfile);

export default router;