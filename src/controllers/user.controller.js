import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.js";
import { uploadOnCloudinay } from "../utils/cloudnary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;

  console.log("email:", email);
  console.log("fullName:", fullName);

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "") //this just trim empty strings
  ) {
    throw new ApiError(400, "All fields are required"); //throw error
  }

  // continue with user registration logic here...
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "Username or email already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  const avatar = await uploadOnCloudinay(avatarLocalPath);
  const coverImage = await uploadOnCloudinay(coverImageLocalPath);
  if (!avatar) {
    throw new ApiError(400, "All fields are required");                   
  }
  

  
  
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    username: username.toLowerCase(),
    password
  })
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )
  if(!createdUser) {
    throw new ApiError(500 , "Failed to create user || Cannot register")
  }
  return res.status(201).json(
    new ApiResponse(200, createdUser,"User registered successfully")
  )

});


export{
  registerUser,
}