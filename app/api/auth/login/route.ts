// import passport from 'passport'
// import '../../../../lib/passportConfig'
// import TwitterStrategy  from 'passport-twitter'
import TwitterLogin from 'twitter-login'
import { NextResponse } from 'next/server';


const twitter = new TwitterLogin({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackUrl: 'http://127.0.0.1:3000/api/auth/callback',
})


export async function GET(req:Request) {
 

        const result = await twitter.login()
        // Save the OAuth token secret for use in your /twitterauth/userToken Callback route
        req.session.tokenSecret = result.tokenSecret
    //     // Redirect to the /twitterauth/userToken route, with the OAuth responses as query params
    //   } catch (err) {
    //     // Handle Error here
    //     res.send('Twitter login error.')
    //   }
       //@ts-ignore
        res.redirect(result.url)    

}