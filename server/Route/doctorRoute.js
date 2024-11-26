import express from "express";
import {
  deleteDoctor,
  getAllDoctor,
  getDoctorProfile,
  getSingleDoctor,
  updateDoctor,
} from "./../Controllers/doctorController.js";
import { authentication, restriction } from "../auth/verifyToken.js";
import reviewRouter from "./reviewRoute.js";

const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put(
  "/update/:id",
  authentication,
  restriction(["doctor"]),
  updateDoctor
);
router.delete(
  "/delete/:id",
  authentication,
  restriction(["admin"]),
  deleteDoctor
);

router.get(
  "/profile/me",
  authentication,
  restriction(["doctor"]),
  getDoctorProfile
);



export default router;
