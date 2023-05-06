import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedIn");
  let url = req.url;
  let indexURL = "http://localhost:3000/";

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(indexURL);
  }
  // If the user is logged in cannot go to the sign or register page
  else if (verify && url === indexURL) {
    return NextResponse.redirect(`${indexURL}dashboard`);
  }
}
