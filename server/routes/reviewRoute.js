import express from "express";
import { createReview, getReviews } from "../controller/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getReviews)
  .post(authenticate, restrict(["patient"]), createReview);

export default router;
