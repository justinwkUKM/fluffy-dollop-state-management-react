import React, { useState } from "react";
import { login } from "../utils/login_utils";


function login_page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // async function  form_submit(e) {
  //     e.preventDefault();

  // }

  const form_submit = async (e) => {
    e.preventDefault();
    // alert('Success')
    try {
      setIsLoading(true);
      await login({ email, password });
      setLoggedIn(true);
      setError("");

      // is resolved - success
    } catch (error) {
      setError("Incorrect credentials");
      setEmail("")
      setPassword("")
      setLoggedIn(false)
      // do nothing
    }

    setIsLoading(false);
  };

  console.log(password);
  // function email_change(e) {
  //     e.preventDefault();
  //     console.log(e.currentTarget.value)
  // }

  return (
    <div>
      {error && <p>{error}</p>}
      
      {isLoggedIn ? (
        <>
          <p>You are Logged In</p>
          <button onClick={() => setLoggedIn(false)}>Log Out</button>
        </>
      ) : (
        <form onSubmit={form_submit}>
          <p>LoginForm</p>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          ></input>
          <button type="submit">
            {" "}
            {isLoading ? "Logging in...." : "Log in"}
          </button>
        </form>
      )}
    </div>
  );
}

export default login_page;
