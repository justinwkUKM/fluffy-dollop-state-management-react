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
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <h1 class="flex-auto text-lg font-semibold text-slate-900 m-3">
              Welcome {email}
            </h1>
            <button
              class="h-10 px-6 font-semibold rounded-md bg-black text-white m-6"
              onClick={() => {
                // setLoggedIn(false)
                dispatch({ type: "logout" });
              }}
            >
              Log Out
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={form_submit}>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <h1 class="flex-auto text-lg font-semibold text-slate-900 m-3">
              Login With Reducer
            </h1>
            <input
              class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 m-1"
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
              class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 m-1"
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
            <button
              class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 m-6"
              type="submit"
            >
              {" "}
              {isLoading ? "Logging in...." : "Log in"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default login_page;
