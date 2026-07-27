import User from "../models/User.js";

export const getDashboard = async (req, res) => {

  const user = await User.findById(req.user.userId).select("-password");

  res.json({
    success: true,
    user,
  });

};