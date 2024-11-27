import express from 'express';
import { deleteDoctor, getAllDoctor, getSingleDoctor, updateDoctor } from '../controller/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

import reviewRouter from './reviewRoute.js';


const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/",  getAllDoctor);
router.put("/:id",authenticate, restrict(['doctor']), updateDoctor);
router.delete("/:id",authenticate, restrict(['doctor']), deleteDoctor);
export default router;