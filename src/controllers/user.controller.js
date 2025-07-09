import { asyncHandler } from "../utils/AsyncHandler";

const registerUser = asyncHandler(async (req , res) => {
    res.status(200).json({
        message:"ok"
    })
})