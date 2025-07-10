import { asyncHandler } from "../utils/AsyncHandler.js";






export const registerUser = asyncHandler(async (req, res) => {
 

const {fullName,email,username,password} = req.body
console.log("email:",email);
console.log("password",password);







}); 



