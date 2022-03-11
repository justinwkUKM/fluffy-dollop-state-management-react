import React, { useState, useReducer } from "react";
import { initial_state } from "../context/initial_states/initial_states";
import { loginReducer } from "../context/reducer/login_reducer";

import {
  ACTION_TYPE_ERROR,
  ACTION_TYPE_FIELD,
  ACTION_TYPE_LOGIN,
  ACTION_TYPE_LOGOUT,
  ACTION_TYPE_SUCCESS,
} from "../utils/constants";
import { login } from "../utils/login_utils";


function login_page() {
  const [state, dispatch] = useReducer(loginReducer, initial_state);
  const { email, password, isLoading, error, isLoggedIn } = state;

  const form_submit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: ACTION_TYPE_LOGIN });
      await login({ email, password });
      dispatch({ type: ACTION_TYPE_SUCCESS });
    } catch (error) {
      dispatch({ type: ACTION_TYPE_ERROR });
    }
  };

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
                dispatch({ type: ACTION_TYPE_LOGOUT });
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
                  type: ACTION_TYPE_FIELD,
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
                  type: ACTION_TYPE_FIELD,
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
