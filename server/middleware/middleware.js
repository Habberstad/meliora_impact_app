import User from "../models/userModel.js";
import passport from "passport";

export const isLoggedIn = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

export const hasAccount = async (req, res, next) => {
  const user = await User.find({ google_id: req.user.id });

  if (user.length !== 0 && req.user.id === user[0].google_id) {
    next();
  } else {
    res.sendStatus(401);
  }
};

export const accessToOwnAccountOnly = async (req, res, next) => {
  const user = await User.find({ google_id: req.user.id });

  if (user.length !== 0 && req.user.id === user[0].google_id) {
    next();
  } else {
    res.sendStatus(401);
  }
};

export const roleRequired = (role) => {
  return async (req, res, next) => {
    const user = await User.find({ google_id: req.user.id });

    if (user.length !== 0 && user[0].role === role) {
      next();
    } else {
      res.sendStatus(401);
    }
  };
};

export const subscriptionTypeRequired = (subscriptionType) => {
  return async (req, res, next) => {
    const user = await User.find({ google_id: req.user.id });

    if (user.length !== 0 && user[0].subscription === subscriptionType) {
      next();
    } else {
      res.sendStatus(401);
    }
  };
};

export default { isLoggedIn, hasAccount, accessToOwnAccountOnly, roleRequired, subscriptionTypeRequired };