import User from "../models/User.js";
import { createError } from "../utils/error.js";
import { createSuccess } from "../utils/success.js";

export const getAllusers = async (req, res, next) => {
  try {
    const user = await User.find();
    return next(createSuccess(200, "all users", user));
  } catch (error) {
    return next(createError(500, "internal server error", error));
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const removedUser = await User.findByIdAndDelete({ _id: id });
    return next(createSuccess(200, "user is removed", removedUser));
  } catch (error) {
    return next(createError(500, "internal server error", error));
  }
};
