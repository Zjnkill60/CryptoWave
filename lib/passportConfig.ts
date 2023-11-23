import passport from 'passport'

import TwitterStrategy  from 'passport-twitter'


passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/api/twitter/callback"
  },
  function(token:any, tokenSecret:any, profile:any, cb:any) {
   console.log(token,tokenSecret,profile,cb)
  }
));

