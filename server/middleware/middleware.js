import User from "../models/userModel.js";
import passport from "passport";
import { ObjectId } from "mongodb";

export const isLoggedIn = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

export const hasAccount = async (req, res, next) => {
  if (!req.user) {
    return res.sendStatus(401);
  }

  const user = await User.find({ google_id: req.user.id });

  if (user.length !== 0 && req.user.id === user[0].google_id) {
    next();
  } else {
    res.sendStatus(401);
  }
};


// should change to find (from findById
export const accessToOwnAccountOnly = async (req, res, next) => {
  if(!req.user){
    return res.sendStatus(401);
  }

  const user = await User.find({ google_id : req.user.id });

  try{
    const id = ObjectId(req.params.id)
    const id2 = user[0]._id.toString()
    if (user.length !== 0 && id.equals(id2)) {
      next();
    } else {
      res.sendStatus(401);
    }
  }catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }


};

export const roleRequired = (role) => {
  return async (req, res, next) => {
    if(!req.user){
      return res.sendStatus(401);
    }

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
    if(!req.user){
      return res.sendStatus(401);
    }

    const user = await User.find({ google_id: req.user.id });

    if (user.length !== 0 && user[0].subscription === subscriptionType) {
      next();
    } else {
      res.sendStatus(401);
    }
  };
};

const extractUrlPathParam = (url) =>{
  return  url.substring(
    url.lastIndexOf("/") + 1
  );
}

export default { isLoggedIn, hasAccount, accessToOwnAccountOnly, roleRequired, subscriptionTypeRequired };