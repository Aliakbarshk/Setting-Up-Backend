import { asyncHandler } from "../utils/AsyncHandler.js";

try{

const registerUser = asyncHandler(async (req , res) => {
   return res.status(200).json({
        message:"ok"
    })
   
})}
catch(err){
    console.log(err,"Not working")
}