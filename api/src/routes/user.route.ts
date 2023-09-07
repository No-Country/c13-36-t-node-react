import express from "express";
import {
  validateRegisterUser,
  validateUpdatePasswordUser,
  validateUpdateUser,
} from "../helpers/UserValidator";
import {
  deleteUser,
  loginUser,
  registerUser,
  resetPassword,
  requestPasswordReset,
  updateUser,
  getUserById,
  uploadAvatar,
} from "../controllers/user.controller";
import { auth } from "../helpers/token";
import multer from "multer";
import { Request, Response } from "express";

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimeTypes = [
    "image/gif",
    "image/png",
    "image/jpeg",
    "image/jpg",
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    // Acepta el archivo
    cb(null, true);
  } else {
    // Rechaza el archivo
    cb(new Error("Tipo de archivo no permitido."));
  }
};

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, "./uploads");
  },
  filename: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage, fileFilter });

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", validateRegisterUser, registerUser);
router.get("/:userId", [auth], getUserById);
router.put("/update/:userId", [auth], validateUpdateUser, updateUser);
router.delete("/delete/:userId", [auth], deleteUser);
router.post("/forgot-password", requestPasswordReset);
router.post(
  "/reset-password/:userId/:token",
  validateUpdatePasswordUser,
  resetPassword
);
router.post(
  "/upload-image/:userId",
  [auth, uploads.single("avatar")],
  uploadAvatar
);

export { router };
