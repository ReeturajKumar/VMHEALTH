import express from "express";
import { deleteDoctor, getAllDoctor, getSingleDoctor, updateDoctor } from './../Controllers/doctorController.js';
import {authentication, restriction} from '../auth/verifyToken.js';
import reviewRouter from './reviewRoute.js';

const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/update/:id",authentication, restriction(['doctor']), updateDoctor);
router.delete("/delete/:id",authentication, restriction(['admin']), deleteDoctor);



export default router