const passport = require("passport");
const { OAuth2Strategy } = require("passport-google-oauth");
require("dotenv").config();

const emails = [];

const URL_AUTH_GOOGLE = process.env.NODE_ENV === "production" ?
  "https://api-ecom-07.herokuapp.com/auth/google/callback" : "http://localhost:3001/auth/google/callback"

passport.use(
  "auth-google",
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: URL_AUTH_GOOGLE,
    },
    function (accessToken, refreshToken, profile, done) {
      const response = emails.includes(profile.emails[0].value);
      // IF EXITS IN DATABASE

      if (response) {
        done(null, profile);
      } else {
        // SAVE IN DATABASE
        emails.push(profile.emails[0].value);
        done(null, profile);
      }
    }
  )
);
