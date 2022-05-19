import passport from "passport";


import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";


dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID_GOOGLE,
      clientSecret: process.env.COOKIE_SECRET,
      callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;