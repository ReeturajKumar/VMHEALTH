import express from "express";
import { getAllReview, createReview } from "../Controllers/reviewController.js";
import { authentication, restriction } from "../auth/verifyToken.js";

const router = express.Router({mergeParams: true});

router
  .route("/")
  .get(getAllReview)
  .post(authentication, restriction(["patient"]), createReview);

export default router;
