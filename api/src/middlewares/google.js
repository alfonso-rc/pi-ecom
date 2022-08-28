const passport = require("passport");
const { OAuth2Strategy } = require("passport-google-oauth");
require("dotenv").config();

const emails = [];

passport.use(
  "auth-google",
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
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
      console.log(emails);
    }
  )
);
