import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
  getUserProfile,
  getMyAppointments,
} from "./../Controllers/userController.js";
import { authentication, restriction } from "../auth/verifyToken.js";

const router = express.Router();
router.put("/:id", authentication, restriction(["patient"]), updateUser);
router.delete(
  "/:id",
  authentication,
  restriction(["patient", "admin"]),
  deleteUser
);
router.get(
  "/:id",
  authentication,
  restriction(["patient", "admin"]),
  getSingleUser
);

router.get(
  "/profile/me",
  authentication,
  restriction(["patient"]),
  getUserProfile
);

router.get(
  "/appointments/my-appointments",
  authentication,
  restriction(["patient"]),
  getMyAppointments
);

router.get("/", authentication, restriction(["admin"]), getAllUser);

export default router;
