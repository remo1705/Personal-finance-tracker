import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
    '/((?!sign-in|sign-up|api/webhooks).*)',
]);

export default clerkMiddleware(async (auth, request) => {
    if (isProtectedRoute(request)) {
        await auth.protect();
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};


// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher([
//     '/', 
// ]); 
// export default clerkMiddleware((auth, request) => {
//     if (isProtectedRoute(request)) {
//         auth().protect(); 
//     }

//     return NextResponse.next(); 
// }); 

// export const config = {
//   matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)', '/', '/(api|trpc)(.*)'],
// };