import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.model";
import type { User as UserType } from "../types/user";

const secretKey = process.env.SECRET_KEY as string;

declare global {
  namespace Express {
    interface Request {
      user: UserType;
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized. Token missing" });
    }

    const decodedToken: any = jwt.verify(token, secretKey);

    const user = await User.findOne({ where: { id: decodedToken.userId } });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized. User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error("Error authenticating token:", error);
    return res.status(401).json({ message: "Unauthorized. Invalid token" });
  }
};
