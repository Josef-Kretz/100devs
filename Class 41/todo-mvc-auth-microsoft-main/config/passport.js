const OIDCStrategy = require('passport-azure-ad').OIDCStrategy //allows use of passport azure framework
const mongoose = require('mongoose') //allows use of mongoose framework
const config = require('../config/config') //gets settings in config file
const User = require('../models/User') //gets user schema

module.exports = function (passport) {
  passport.use(
    new OIDCStrategy({ //copy and pasted from docs
        identityMetadata: config.creds.identityMetadata,
        clientID: config.creds.clientID,
        responseType: config.creds.responseType,
        responseMode: config.creds.responseMode,
        redirectUrl: config.creds.redirectUrl,
        allowHttpForRedirectUrl: config.creds.allowHttpForRedirectUrl,
        clientSecret: config.creds.clientSecret,
        validateIssuer: config.creds.validateIssuer,
        isB2C: config.creds.isB2C,
        issuer: config.creds.issuer,
        passReqToCallback: config.creds.passReqToCallback,
        scope: config.creds.scope,
        loggingLevel: config.creds.loggingLevel,
        nonceLifetime: config.creds.nonceLifetime,
        nonceMaxAmount: config.creds.nonceMaxAmount,
        useCookieInsteadOfSession: config.creds.useCookieInsteadOfSession,
        cookieEncryptionKeys: config.creds.cookieEncryptionKeys,
        clockSkew: config.creds.clockSkew,
      },
      async (accessToken, refreshToken, profile, done) => { //callback for checking user
        console.log('auth: ', profile) //logs profile to console
        const newUser = {//creates a new user object
          microsoftId: profile.oid,
          displayName: profile.displayName,
        }

        try {
          let user = await User.findOne({ microsoftId: profile.oid }) //checks database for existing user

          if (user) { //if user exists, call done
            done(null, user)
          } else {
            //if user is not in DB, create then done
            user = await User.create(newUser)
            done(null, user)
          }
        } catch (err) {
          console.error(err) //logs any caught error in database
        }
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}
