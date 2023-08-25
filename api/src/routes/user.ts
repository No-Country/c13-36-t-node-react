import express from "express";
import {
  validateRegisterUser,
  validateUpdateUser,
} from "../helpers/UserValidator";
import {
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/user.controller";
import { auth } from "../middlewares/token";

const router = express.Router();

router.post("/user/login", loginUser);
router.post("/user/register", validateRegisterUser, registerUser);
router.put("/user/:userId", [auth], validateUpdateUser, updateUser);

export default router;
