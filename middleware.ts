import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/", "/api/webhook","/sign-in","/api/handler-bank-transfer","/api/register-webhook","/api/user-paid","/api/webhook-event-handler"],
  ignoredRoutes: ["/api/webhook", "api/chatgpt","/api/webhook-event-handler"],

});
;
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  publicRoutes:['/']

};
 
