import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

function dashboard() {
  const [data, setData] = useState("");
  const router = useRouter();
  const signOut = () => {
    Cookies.remove("loggedIn");
    Cookies.remove("jwt-token");
    location.href = "/";
  };

  useEffect(() => {
    if (Cookies.get("jwt-token") !== "") {
      setData(jwt.decode(Cookies.get("jwt-token")));
      console.log(data);
    }
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <p>Hi {data.name}. You don't have any notes. Create a new one.</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default dashboard;
