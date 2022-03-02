import React, { useState, useReducer } from "react";
import { login } from "../utils/login_utils";


// 1. Create a Reducer function 
function loginReducer(state, action) {
  switch (action.type) {
    case "field": {
      console.log("field");
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "success": {
      console.log("success");
      return {
        ...state,
        isLoggedIn: true,
        error: "",
      };
    }
    case "login": {
      console.log("login");
      return {
        ...state,
        isLoading: true,
      };
    }
    case "error": {
      console.log("error");
      return {
        ...state,
        error: "Incorrect Credentials",
        isLoading: false,
      };
    }
    case "logout":
      {
        console.log("logout");
        return {
          ...state,
          isLoggedIn: false,
          isLoading: false,
        };
      }
      break;

    default:
      break;
  }
  return state;
}

// 2. Create Initial Values
const initial_state = {
  email: "",
  password: "",
  isLoggedIn: false,
  error: "",
  isLoggedIn: false,
};

// 3. Use the Reducer function - call dispatch method and supply/dispatch an action type.
function login_page() {
  const [state, dispatch] = useReducer(loginReducer, initial_state);
  const { email, password, isLoading, error, isLoggedIn } = state;
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const [error, setError] = useState("");

  // async function  form_submit(e) {
  //     e.preventDefault();

  // }

  const form_submit = async (e) => {
    e.preventDefault();
    // alert('Success')
    try {
      // setIsLoading(true);
      dispatch({ type: "login" });
      await login({ email, password });
      dispatch({ type: "success" });
      // setLoggedIn(true);
      // setError("");

      // is resolved - success
    } catch (error) {
      dispatch({ type: "error" });

      // setError("Incorrect credentials");
      // do nothing
    }

    // setIsLoading(false);
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
          <button
            onClick={() => {
              // setLoggedIn(false)
              dispatch({ type: "logout" });
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <form onSubmit={form_submit}>
          <p>LoginForm</p>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) =>
              dispatch({
                type: "field",
                field: "email",
                value: e.currentTarget.value,
              })
            }
            value={email}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) =>
              dispatch({
                type: "field",
                field: "password",
                value: e.currentTarget.value,
              })
            }
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
