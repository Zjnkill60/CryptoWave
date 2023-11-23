import passport from '../node_modules/passport'
import '../../../../lib/passportConfig'
import TwitterLogin from 'twitter-login'


//     consumerKey: process.env.TWITTER_CONSUMER_KEY,
//     consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
//     callbackURL: "http://127.0.0.1:3000/api/twitter/callback"
//   },
//   function(token:any, tokenSecret:any, profile:any, cb:any) {
//    console.log(token,tokenSecret,profile,cb)
//   }
// ));
const twitter = new TwitterLogin({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackUrl: 'http://127.0.0.1:3000/api/auth/callback',
})

export async function GET(req:Request,res:Response) {
 
    try {
        const oAuthParam = {
          oauth_token: req.query.oauth_token,
          oauth_verifier: req.query.oauth_verifier,
        }
        console.log("req.query.oauth_token :",req.query.oauth_token)
    
        // call function passing Auth and Token Secret
        const userInfo = await twitter.callback(
          oAuthParam,
          req.session.tokenSecret,
        )
        // Delete the tokenSecret securely
        delete req.session.tokenSecret
        // Add User Info to your session
        req.session.user = userInfo
        // Redirect to route that can extract user detail
        res.redirect('/')
      } catch (err) {
        // Handle Error here
        res.send('Twitter login error.')
      }
    
}

