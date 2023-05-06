import React, { useState } from "react";
import Link from "next/link";

function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    const data = { name, email, password };
    if (name !== "" && email !== "" && password !== "") {
      const endpoint = "/api/signup";
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
        setName("");
        setEmail("");
        setPassword("");
        setMessage(response.msg);
      } else if (response.success == false) {
        setName("");
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
      <h1>Create An Account </h1>
      <br />
      <br />
      <br />
      <form>
        <input
          type="text"
          required
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          required
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          required
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <Link href="#" className="button" onClick={handleSubmit}>
          Sign up
        </Link>
        <p className={"message"}>{message !== "" ? message : null}</p>
        <p style={{ textAlign: "left" }}>
          Already have an account? <Link href="/signin">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

export default signup;
