import { asyncHandler } from "../utils/AsyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  console.log("User Controller working fine");
  return res.status(500).json({
    message: "Heyy i am working",
  });
});
