import User from "../models/userModel.js";
import passport from "passport"

 const isLoggedIn = async (req, res, next) => {
  //const user = await User.find({ google_id: req.user.id });

  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};


export default isLoggedIn;