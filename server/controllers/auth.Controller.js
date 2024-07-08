import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const SignUp = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return next(createError(401, "User is already Exists"));
    }

    const Hashpassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      ...req.body,
      password: Hashpassword,
    });

    //token

    const token = jwt.sign({ _id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "90d",
    });

    return res.status(200).json({
      message: "User registered ",
      newUser,
      token,
    });
  } catch (error) {
    return next(createError(500, "internal server error"));
  }
};

export const Login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(createError(401, "User not Found"));
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(createError(402, "Incorrect Password"));
    }

    //token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "90d",
    });
    return res.status(200).json({
      message: "user logged",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
        token,
      },
    });
  } catch (error) {
    return next(createError(500, "internal server error"));
  }
};
