import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    const data = { email, password };
    if (email !== "" && password !== "") {
      const endpoint = "/api/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      e.preventDefault();
      let res = await fetch(endpoint, options);
      let response = await res.json();

      if (response.success) {
        Cookies.set("loggedIn", true);
        Cookies.set("jwt-token", response.token);
        setEmail("");
        setPassword("");
        setMessage(response.msg);
        location.href = "/dashboard";
      } else if (response.success == false) {
        setEmail("");
        setPassword("");
        setMessage(response.msg);
      }
    } else {
      setMessage("All fields are required!");
    }
  };
  return (
    <div className="signup-page">
      <h1>Sign in </h1>
      <br />
      <br />
      <br />
      <form>
        <input
          type="email"
          required
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          required
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <Link href="#" className="button" onClick={handleSubmit}>
          Log in
        </Link>

        <p className={"message"}>{message !== "" ? message : null}</p>

        <p style={{ textAlign: "left" }}>
          Don't have an account? <Link href="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default signin;
