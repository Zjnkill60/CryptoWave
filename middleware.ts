import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/", "/api/webhook","/sign-in"],
  ignoredRoutes: ["/api/webhook", "api/chatgpt"],

});
;
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  publicRoutes:['/']

};
 
