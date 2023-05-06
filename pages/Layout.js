import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cookies from "js-cookie";

function Layout({ children }) {
  const [isAuth, setIsAuth] = useState("");
  useEffect(() => {
    if (Cookies.get("loggedIn") !== "") {
      setIsAuth(Cookies.get("loggedIn"));
      console.log("isAuth: " + isAuth);
    }
  }, []);
  return (
    <main className="main-container">
      <Navbar isAuth={isAuth} />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
