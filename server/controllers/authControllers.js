
import passport from "passport";
import User from "../models/userModel.js";
import { config } from "../config/Constants.js";
import UserService from "../services/userService.js";
import { query } from "express";
const CLIENT_URL = config.url.API_URL;

async function googleCallback(req, res) {
  try {
    const hasAccount = await UserService.isRegisteredUserId({google_id: req.user.id});

    if (!hasAccount){
      res.redirect(CLIENT_URL + "/find-company?exists=false");
    } else {
      res.redirect(CLIENT_URL);
    }

  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

function loginFailed(req, res) {
    res.status(401).json({
      success: false,
      message: "failure"
    });
}

async function logout(req, res) {
    await req.logout();
    res.redirect(CLIENT_URL);
}

function loginSuccess(req, res) {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        cookies: req.cookies
      });
    }
}

export default { googleCallback, loginFailed, logout, loginSuccess };