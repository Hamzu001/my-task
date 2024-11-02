import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// register user /signup ->> /api/v1/user/register
const registerUser = asyncHandler(async (req, res) => {
  const { number, otp } = req.body;

  if ([number, otp].some((field) => field?.trim() === "")) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  const user = await User.create({ number, otp });

  console.log("user", user);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Register Successfully"));
});

export { registerUser };
