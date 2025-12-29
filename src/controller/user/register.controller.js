import { apiError } from "../../utils/apiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { User } from "../../model/user.model.js";
import { uploadCloudinaryFile } from "../../utils/cloudinary.js";
import { apiResponse } from "../../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  /**
   * get all data from req.body
   * validate all data has or not
   * avater has or not ?
   * if avater has, that upload in cloudinary
   * find this { email or username } already exist ?
   * create user
   * remove password and refresh token from user
   * return res
   */

  const { userName, fullName, email, password } = req.body;

  // check empty field
  if (
    [userName, fullName, email, password].some((item) => item?.trim() === "")
  ) {
    throw new apiError(400, "all field are required !!!");
  }

  // user already has or not
  const existUser = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (existUser) {
    throw new apiError(400, "User already exist !!!");
  }

  // check avater has or not
  const avaterLocalPath = req.files?.avater[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avaterLocalPath) {
    throw new apiError(400, "unavailable avater local Path !!!");
  }

  const avater = await uploadCloudinaryFile(avaterLocalPath);
  const coverImage = await uploadCloudinaryFile(coverImageLocalPath);

  // if (!avater) {
  //   throw new apiError(400, "avater not found !!!");
  // }

  // create user
  const user = await User.create({
    userName: userName.toLowerCase(),
    fullName,
    email,
    password,
    avater: avater?.url || "",
    coverImage: coverImage?.url || "",
  });

  // remove 2 field
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if(!createdUser){
    throw new apiError(500, 'something went wrong while registring the User !!!')
  }

  // return res 
  return res.status(201).json(new apiResponse(200, createdUser))


});

export { registerUser };
