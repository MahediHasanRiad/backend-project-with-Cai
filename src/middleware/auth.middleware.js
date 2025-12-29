import { apiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

const jwtVerify = async (req, _res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) throw new apiError(400, "Invalid token");

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded._id);

    if (!user) throw new apiError(401, "invalid token");

    req.user = user;

    next();
  } 
  catch (error) {
    throw new apiError(400, error);
  }
};

export { jwtVerify };
