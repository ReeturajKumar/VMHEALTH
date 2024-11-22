import express from "express";
import { updateUser, deleteUser, getSingleUser, getAllUser } from './../Controllers/userController.js';
import {authentication, restriction} from '../auth/verifyToken.js'

const router = express.Router();  

router.put("/update/:id",restriction(['patient']), updateUser);
router.delete("/delete/:id",restriction(['patient']), deleteUser);
router.get("/:id",authentication,restriction(['patient']), getSingleUser);
router.get("/",restriction(['admin']), getAllUser);

export default router