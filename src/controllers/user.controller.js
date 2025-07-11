import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

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
const existedUser= User.findOne({
    $or: [{username},{email}]
})
if(existedUser){
    throw new ApiError(409, "Username or email already exists");
}

const avatarLocalPath = req.files?.avatar[0]?.path
const coverImageLocalPath = req.files?.coverImage[0]?.path;

if(!avatarLocalPath){
    throw new ApiError(400,"Avatar file is required")
}


});
