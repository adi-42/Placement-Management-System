const passport=require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const funcs = require('./trainee_db.js');
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
      },
      function (request, accessToken, refreshToken, profile, done) {
        let email = profile.emails[0].value;
        let level = funcs.verify_access(email);
        return done(null, { level, email, profile });
      }
    )
  );
  
  
  